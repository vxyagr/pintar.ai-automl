import json, pprint, requests, textwrap
import subprocess
from template import Template
from model import DB 
import datetime
import os
import settings as s
class Livy():
    # host = "http://95.216.36.121:8999" #hz
    # host = "http://192.168.42.139:8998" #local
    host = s.livy_host

    ret_message = dict()

    def __init__(self):
        self.ret_message['code'] = 'livy-0'
        self.ret_message['description'] = 'OK'

        return


    def attach_session(self, session_name, livy_id):
        headers = {'Content-Type': 'application/json'}

        r = requests.get(self.host + '/sessions' + '/' + str(livy_id) , headers=headers)

        if r.status_code == '200' or r.status_code == '201':
            json_result = json.loads(r.text)

            if json_result['id'] == livy_id and  json_result['proxyUser'] == session_name:
                self.ret_message['code'] = 'livy-0'
                self.ret_message['description'] = 'OK'

                return True

            else:
                self.ret_message['code'] = 'livy-1'
                self.ret_message['description'] = 'Session does not match'

                return False
        else:
            self.ret_message['code'] = 'livy-2'
            self.ret_message['description'] = r.text

            return False

    def create_session(self,
                        is_new,
                        user_id, #nanti proxy user ganti jadi session_name
                        session_name,
                        package_id,
                        project_name,
                        project_description,
                        encapsulation,
                        num_of_core,
                        num_of_mem):

        db = DB()
        livy_url = self.host

        if is_new=='new':
            quota_data = db.get_quota_left(user_id)
            print('quota_data', quota_data)
            core_left = quota_data['core_left']
            mem_left = quota_data['mem_left']
            core_used = quota_data['core_used']
            mem_used = quota_data['core_used']

            if int(core_left) < int(num_of_core):
                self.ret_message['code'] = 'livy-1'
                self.ret_message['description'] = 'Not enough core left'
                print("masuk atas")
                return self.ret_message
            if int(mem_left) < int(num_of_mem):
                self.ret_message['code'] = 'livy-2'
                self.ret_message['description'] = 'Not enough memory left'
                print("masuk bawah")
                return self.ret_message 
            
            print("masuk ajah")
            r = self.create_livy_session(user_id, session_name, project_name, num_of_core, num_of_mem)
            print('status_code', r.status_code, r.text)
            if str(r.status_code) == '201' or str(r.status_code) == '200':
                r_dumps = r.json() 
                
                livy_id = r_dumps['id']
                livy_appId = r_dumps['appId']


                self.ret_message['body'] = {'livy_id': livy_id, 'livy_appId': livy_appId}

                ret = db.create_session(user_id,
                                        package_id,
                                        num_of_core,
                                        num_of_mem,
                                        project_name,
                                        project_description,
                                        livy_id,
                                        livy_url,
                                        encapsulation)
                print('ret[code]>>', ret['code'])
                if (ret['code'] == 'pg-0' or ret['code'] == 'livy-0'):
                    db = DB()
                    ret = db.update_quota(user_id, num_of_core, num_of_mem, core_used, mem_used, core_left, mem_left)
                    print('ret', ret)
                    if ret['code'] == 'pg-0':
                        ret['code'] = 'livy-0'
                    else:
                        ret['code'] = ret['code']
                else:
                    ret['code'] == ret['code']
                db.disconnect()
                self.ret_message = ret
            else:
                self.ret_message['code'] = 'livy-3'
            self.ret_message['description'] = json.loads(r.text)

           
        else:
            r = self.create_livy_session(user_id, session_name, project_name, num_of_core, num_of_mem)
            r_dumps = r.json()

            livy_id = r_dumps['id']

            db = DB()
            ret = db.update_livy_id(user_id, project_name, livy_id)

            if ret['code'] != 'pg-0':
                self.ret_message['code'] = 'livy-3'
            db.disconnect()
            self.ret_message['description'] = json.loads(r.text)
        return self.ret_message


    def create_livy_session(self, 
                            user_id,
                            session_name, #nanti proxy user ganti jadi session_name
                            project_name,
                            num_of_core,
                            num_of_mem):
        num_of_mem = str(num_of_mem) 
        print('create livy: ', user_id, project_name)
        data = {"name": user_id + '_' + project_name, "kind": "pyspark", "proxyUser": session_name, "conf": {"spark.cores.max": num_of_core, "spark.executor.cores": num_of_core, "spark.executor.memory": num_of_mem + "m"}}
        print('livy data: ', data)

        headers = {'Content-Type': 'application/json'}

        r = requests.post(self.host + '/sessions', data=json.dumps(data), headers=headers)


        return r

    def stop_livy_session(self, livy_id):
        headers = {'Content-Type': 'application/json'}
        r = requests.delete(self.host + '/sessions/' + str(livy_id), headers=headers)
        
        return r

    def import_database(self,

                        user_id,
                        livy_id,
                        database_type,
                        database_url,
                        database_name,
                        database_table,
                        database_user,
                        database_password):
        t = Template()

        if database_type == 'postgres':
            code = t.import_postgresql_database(
                            database_url,
                            database_name,
                            database_table,
                            database_user,
                            database_password)
        elif database_type == 'mysql':
            code = t.import_mysql_database(
                            database_url,
                            database_name,
                            database_table,
                            database_user,
                            database_password)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-4'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    

    def show_tables(self, user_id, livy_id):
        t = Template()
        code = t.show_tables(user_id)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-7'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def show_model(self, session_name, user_id, livy_id):
        t = Template()
        code = t.show_model(session_name)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-7'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def describe_table(self, user_id, livy_id, table_name):
        t = Template()
        code = t.describe_table(table_name)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-8'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def convert(self, user_id, livy_id, table_name, table):
        t = Template()
        code = t.convert(table_name, table)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-8'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def hivetable(self, database, dataframe, livy_id):
        t = Template()
        code = t.hivetable(database, dataframe)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-8'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def import_file(self, file, delimiter, header, session_name, livy_id):
        local_user_folder = s.local_user_folder
        remote_username = s.remote_username
        remote_host = s.remote_host
        remote_user_folder = s.remote_user_folder


        filename_ori=file.filename

        arr_filename = filename_ori.split('.')
        filename = arr_filename[0]
        import subprocess as sb

        cmd = ['ls', '-la', local_user_folder + session_name ]
        local_folder_check = sb.call(cmd)
        if local_folder_check != 0:
            cmd = ['mkdir', local_user_folder + session_name ]
            sb.call(cmd, stdout=open(os.devnull, 'wb'))
        else:
            pass

        tes = file.save(local_user_folder + session_name + '/' + filename_ori)
        print('-------------------------tes-------------',tes)

        cmd = ['scp', local_user_folder + session_name + '/' + filename_ori, remote_username + "@" + remote_host + ":" + remote_user_folder + session_name  + "/" + filename_ori]
        print('---------------------------', cmd)
        sb.call(cmd, stdout=open(os.devnull, 'wb'))

        t = Template()
        code = t.import_file(file, delimiter, header, session_name)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-7'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def merge_tables(self, table1_name, table2_name, on_table1, on_table2, how, user_id, livy_id):
        t = Template()
        code = t.merge_tables(table1_name, table2_name, on_table1, on_table2, how)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-8'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def selectcol(self, table_name, input_columns, user_id, livy_id):
        t = Template()
        code = t.selectcol(table_name, input_columns)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def select_row(self, table_name, name, method, value, user_id, livy_id):
        t = Template()
        code = t.select_row(table_name, name, method, value)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-8'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def custom_query(self, dataframe, custom, user_id, livy_id):
        t = Template()
        # code = t.custom_query(datarame, custom)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": custom}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-8'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    # def pca(self, table_name, input_column, user_id, livy_id):
    def vector_assembler(self, table_name, input_columns, output_col, user_id, livy_id):
        t = Template()
        code = t.vector_assembler(table_name, input_columns, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def hypothesis(self, table_name, output_col, labels, user_id, livy_id):
        t = Template()
        code = t.hypothesis(table_name, output_col, labels)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def normalizer(self, table_name, on_table, output_col, p, user_id, livy_id):
        t = Template()
        code = t.normalizer(table_name, on_table, output_col, p)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def bucketizer(self, table_name, split, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.bucketizer(table_name, split, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def standardscaler(self, table_name, input_col, output_col, withStd, withMean, user_id, livy_id):
        t = Template()
        code = t.standardscaler(table_name, input_col, output_col, withStd, withMean)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def tokenizer(self, table_name, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.tokenizer(table_name, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def missingval(self, table_name, radioValue, user_id, livy_id):
        t = Template()
        code = t.missingval(table_name,radioValue)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def stopword(self, table_name, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.stopword(table_name, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def stringindexer(self, table_name, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.stringindexer(table_name, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def labelindexer(self, table_name, input_col, output_col, handleInvalid, stringOrderType, user_id, livy_id):
        t = Template()
        code = t.labelindexer(table_name, input_col, output_col, handleInvalid, stringOrderType)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def labelconverter(self, table_name, input_col, output_col, labels, user_id, livy_id):
        t = Template()
        code = t.labelconverter(table_name, input_col, output_col, labels)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def onehot(self, table_name, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.onehot(table_name, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def minmax(self, table_name, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.minmax(table_name, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def pca(self, table_name, num_of_components, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.pca(table_name, num_of_components, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def hashingTf(self, table_name, num_of_features, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.hashingTf(table_name, num_of_features, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def idf(self, table_name, min_doc_freq, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.idf(table_name, min_doc_freq, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def countvectorizer(self, table_name, input_col, output_col, user_id, livy_id):
        t = Template()
        code = t.countvectorizer(table_name, input_col, output_col)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def kmeans(self, table_name, features_col, prediction_col, k, seed, user_id, livy_id):
        # def kmeans(self, table_name, features_col, prediction_col, init_mode, tol, k, max_iter, seed, distance_measure, user_id, livy_id):
        t = Template()
        code = t.kmeans(table_name, features_col, prediction_col, k, seed)
        # code = t.kmeans(table_name, features_col, prediction_col, init_mode, tol, k, max_iter, seed, distance_measure)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def gmm(self, table_name, features_col, label_col, prediction_col, k, probability_col,tol, max_iter, seed, user_id, livy_id):
        t = Template()
        code = t.gmm(table_name, features_col, label_col, prediction_col, k, probability_col,tol, max_iter, seed)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def linear_regression(self, table_name, features_col, label_col, prediction_col, max_iter, reg_param, elastic_net_param, tol, fit_intercept, standardization, solver, weight_col, aggregation_depth, loss, epsilon, train, test, user_id, livy_id):
        t = Template()
        code = t.linear_regression(table_name, features_col, label_col, prediction_col, max_iter, reg_param, elastic_net_param, tol, fit_intercept, standardization, solver, weight_col, aggregation_depth, loss, epsilon, train, test)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-9'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def logistic_regression(self, 
                            table_name, 
                            features_col, 
                            label_col, 
                            prediction_col, 
                            max_iter, 
                            reg_param, 
                            elastic_net_param, 
                            tol, 
                            fit_intercept, 
                            threshold, 
                            thresholds, 
                            probability_col, 
                            raw_prediction_col, 
                            standardization, 
                            weight_col, 
                            aggregation_depth, 
                            family, 
                            lower_bounds_on_coefficients, 
                            upper_bounds_on_coefficients, 
                            lower_bounds_on_intercepts, 
                            upper_bounds_on_intercepts,
                            train, test, 
                            user_id, 
                            livy_id):
        t = Template()
        code = t.logistic_regression(table_name, features_col, label_col, prediction_col, max_iter, reg_param, elastic_net_param, tol, fit_intercept, threshold, thresholds, probability_col, raw_prediction_col, standardization, weight_col, aggregation_depth, family, lower_bounds_on_coefficients, upper_bounds_on_coefficients, lower_bounds_on_intercepts, upper_bounds_on_intercepts, train, test)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-10'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def decision_tree(self, 
                    table_name, 
                    features_col, 
                    label_col, 
                    prediction_col, 
                    probability_col, 
                    raw_prediction_col, 
                    max_depth, 
                    max_bins, 
                    min_instances_per_node, 
                    min_info_gain, 
                    max_memory_in_mb, 
                    cache_node_ids, 
                    checkpoint_interval, 
                    impurity, 
                    seed, train, test,
                    user_id, livy_id):
        t = Template()
        code = t.decision_tree(table_name, 
                            features_col, 
                            label_col, 
                            prediction_col, 
                            probability_col, 
                            raw_prediction_col, 
                            max_depth, 
                            max_bins, 
                            min_instances_per_node, 
                            min_info_gain, 
                            max_memory_in_mb, 
                            cache_node_ids, 
                            checkpoint_interval, 
                            impurity,  
                            seed, train, test)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-11'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def naive_bayes(self, 
                    table_name, 
                    features_col, 
                    label_col, 
                    prediction_col, 
                    thresholds, 
                    probability_col, 
                    raw_prediction_col, 
                    smoothing, 
                    weight_col, 
                    model_type, 
                    train, test,
                    user_id, livy_id):
        t = Template()
        code = t.naive_bayes(table_name, features_col, label_col, prediction_col, thresholds, probability_col, raw_prediction_col, smoothing, weight_col, model_type, train, test,)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-10'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def random_forest(self, 
                    table_name, 
                    features_col, 
                    label_col, 
                    prediction_col, 
                    probability_col, 
                    raw_prediction_col, 
                    max_depth, 
                    max_bins, 
                    min_instances_per_node, 
                    min_info_gain, 
                    max_memory_in_mb, 
                    cache_node_ids, 
                    checkpoint_interval, 
                    impurity, 
                    num_trees, 
                    feature_subset_strategy, 
                    seed, 
                    subsampling_rate, 
                    train,test, 
                    user_id, livy_id):
        t = Template()
        code = t.random_forest(table_name, 
                            features_col, 
                            label_col, 
                            prediction_col, 
                            probability_col, 
                            raw_prediction_col, 
                            max_depth, 
                            max_bins, 
                            min_instances_per_node, 
                            min_info_gain, 
                            max_memory_in_mb, 
                            cache_node_ids, 
                            checkpoint_interval, 
                            impurity, 
                            num_trees, 
                            feature_subset_strategy, 
                            seed, 
                            subsampling_rate, train, test)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-11'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def fp_growth(self, table_name, splits, min_support, min_confidence, items_col, prediction_col, num_partitions,  user_id, livy_id):
        t = Template()
        code = t.fp_growth(table_name, splits, min_support, min_confidence, items_col, prediction_col, num_partitions)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-11'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def linear_svc(self, table_name, features_col, label_col, prediction_col, max_iter, reg_param, tol, raw_prediction_col, fit_intercept, standardization, threshold, weight_col, aggregation_depth, train, test, user_id, livy_id):
        t = Template()
        code = t.linear_svc(table_name, features_col, label_col, prediction_col, max_iter, reg_param, tol, raw_prediction_col, fit_intercept, standardization, threshold, weight_col, aggregation_depth, train, test)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-11'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def arima(self, table_name, splits, numberofpredict, date_col, timeseries_col, start_p, d, start_q, max_p, max_d, max_q, start_P, D, start_Q, max_P, max_D, max_Q, max_order, m, seasonal, stationary, stepwise, solver, suppress_warnings, error_action, trace, scoring, business, by,  user_id, livy_id):
        t = Template()
        code = t.arima(table_name, splits, numberofpredict, date_col, timeseries_col, start_p, d, start_q, max_p, max_d, max_q, start_P, D, start_Q, max_P, max_D, max_Q, max_order, m, seasonal, stationary, stepwise, solver, suppress_warnings, error_action, trace, scoring, business, by)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-11'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def get_pipeline_stages(self, user_id, livy_id):
        t = Template()
        code = t.get_pipeline_stages()
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-11'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def save_model(self, session_name, file_name, stages, dataframe, user_id, livy_id):
        t = Template()
        code = t.save_model(session_name, file_name, stages, dataframe)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-11'      
        self.ret_message['description'] = r.text 

        return self.ret_message
     # def line_chart_visual(self, table_name, x, y, user_id, livy_id):
     #    t = Template()
     #    code = t.line_chart_visual(table_name, x, y)
     #    statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
     #    headers = {'Content-Type': 'application/json'}
     #    data = {"code": code}

     #    r = requests.post(statement_url, data=json.dumps(data), headers=headers)
     #    if str(r.status_code) == '201' or str(r.status_code) == '200':
     #        self.ret_message['code'] = self.ret_message['code']
     #    else:
     #        self.ret_message['code'] = 'livy-12'      
     #    self.ret_message['description'] = r.text 

     #    return self.ret_message
    def line_chart_visual(self, table_name, x, y, user_id, livy_id):
        t = Template()
        code = t.line_chart_visual(table_name, x, y)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def bar_chart_visual(self, table_name, index, columns, agg, user_id, livy_id):
        t = Template()
        code = t.bar_chart_visual(table_name, index, columns, agg)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def pie_chart_visual(self, table_name, agg, values, user_id, livy_id):
        t = Template()
        code = t.pie_chart_visual(table_name, agg, values)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def histogram_chart_visual(self, table_name, x1, x2, user_id, livy_id):
        t = Template()
        code = t.histogram_chart_visual(table_name, x1, x2)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def violin_chart_visual(self, table_name, x, y, z, user_id, livy_id):
        t = Template()
        code = t.violin_chart_visual(table_name, x, y, z)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def scatter_chart_visual(self, table_name, x, y, z, category, user_id, livy_id):
        t = Template()
        code = t.scatter_chart_visual(table_name, x, y, z, category)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message
    
    def decision_tree_visual(self, filled, roundedCorners, roundLeaves, user_id, livy_id):
        t = Template()
        code = t.decision_tree_visual(filled, roundedCorners, roundLeaves)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def word_cloud(self, table_name, text_column, user_id, livy_id):
        t = Template()
        code = t.word_cloud(table_name, text_column)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def maps(self, table_name, category, longitude, latitude, user_id, livy_id):
        t = Template()
        code = t.maps(table_name, category, longitude, latitude)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def correlation(self, table_name, features, user_id, livy_id):
        t = Template()
        code = t.correlation(table_name, features)
        statement_url = self.host + '/sessions' + '/' + str(livy_id) + '/statements'
        headers = {'Content-Type': 'application/json'}
        data = {"code": code}

        r = requests.post(statement_url, data=json.dumps(data), headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] = self.ret_message['code']
        else:
            self.ret_message['code'] = 'livy-12'      
        self.ret_message['description'] = r.text 

        return self.ret_message

    def check_session(self, user_id, livy_id, project_name):
        db = DB()
        livy_url = self.host

        # data = {"name": project_name, "kind": "pyspark", "conf": {"spark.cores.max": num_of_core, "spark.executor.cores": num_of_core, "spark.executor.memory": num_of_mem + "m"}}
        headers = {'Content-Type': 'application/json'}

        r = requests.get(self.host + '/sessions' + '/' + str(livy_id) + '/state' , headers=headers)
        print(self.host + '/sessions' + '/' + str(livy_id) + '/state' , r.status_code, r.text)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] =  'livy-0'
        else:
            self.ret_message['code'] =  'livy-5'
        self.ret_message['description'] = r.text

        return self.ret_message

    def check_statement(self, user_id, livy_id, project_name, statement_id):
        db = DB()
        livy_url = self.host

        # data = {"name": project_name, "kind": "pyspark", "conf": {"spark.cores.max": num_of_core, "spark.executor.cores": num_of_core, "spark.executor.memory": num_of_mem + "m"}}
        headers = {'Content-Type': 'application/json'}

        r = requests.get(self.host + '/sessions' + '/' + str(livy_id) + '/statements/' + str(statement_id) , headers=headers)
        if str(r.status_code) == '201' or str(r.status_code) == '200':
            self.ret_message['code'] =  'livy-0'
        else:
            self.ret_message['code'] =  'livy-6'
        self.ret_message['description'] = r.text
        print(self.ret_message)
        return self.ret_message
        



