import psycopg2 
import hashlib
import datetime 
from enum import Enum 
import settings  as s
class SessionStatus(Enum):
    RUN = 1
    DEAD = 2

class DB():
    connection = None
    ret_message = dict()
    ret_message['code'] = 'pg-0'
    ret_message['db-description'] = 'OK'
    
    def __init__(self):
        try:
            self.connection = psycopg2.connect(user = s.db_user,
                                        password =  s.db_password,
                                        host = s.db_host,
                                        # host = "localhost",                                        
                                        port = s.db_port,
                                        database = s.db_name)
            cursor = self.connection.cursor()
            # Print PostgreSQL Connection properties
            # print ( self.connection.get_dsn_parameters(),"\n")
            # Print PostgreSQL version
            cursor.execute("SELECT * from trn_package;")
            record = cursor.fetchone()
            print("You are connected to - ", record,"\n")
        except (Exception, psycopg2.Error) as error:
            print ("Error while connecting to PostgreSQL", error)
        finally:
            return
            #closing database connection.
                # if(self.connection):
                #     cursor.close()
                #     self.connection.close()
                #     print("PostgreSQL connection is closed")

    def register_user(self, user_id, password, logged_in, name, organization, session_name):
        cursor = self.connection.cursor() 
        created_at = datetime.datetime.now().strftime("%Y%m%d %H:%M:%s")
        created_at = created_at[0:17]
        return_validate = self.validate_user(user_id)
        print("validate_user", return_validate)
        if return_validate == "0":
            sql = "INSERT INTO mst_user VALUES(%s, %s, %s, %s, %s, %s, %s)"
            cursor.execute(sql, (user_id, password, logged_in, name, organization, session_name, created_at))
            self.connection.commit()
            self.disconnect()
            count = cursor.rowcount
            if count == 1:
                return "1"
            else:
                return "2"
        else:
            return "3"
             

    def validate_user(self, user_id):
        cursor = self.connection.cursor()
        sql = "select count(1) from mst_user where user_id = %s"
        cursor.execute(sql,(user_id,))
        row = cursor.fetchone()
        print("count data",row[0])
        if row[0] == 0:
            return "0"
        else:
            return "1"

    def save_confirm_email(self, user_id):
        cursor = self.connection.cursor()
        sql = "UPDATE mst_user set logged_in='1' where user_id=%s"
        cursor.execute(sql,(user_id,))
        self.connection.commit()
        self.disconnect()
        return

    def subscribe_package(self, user_id, package_id, max_core, max_mem, created_at, core_used, mem_used, core_left, mem_left):
        cursor = self.connection.cursor()
        created_at = created_at[0:17]
        sql = "INSERT INTO trn_package VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (user_id, package_id, max_core, max_mem, created_at, core_used, mem_used, core_left, mem_left))
        self.connection.commit()
        self.disconnect()
        
        return 
        # self.disconnect() 

    def save_publish_api(self, user_id, session_name, path_model, model, context, token, documentation, category, pricing, active):
        cursor = self.connection.cursor()
        try:

            # model sama dengan project_name 

            sql = "SELECT count(user_id) FROM trn_user_api WHERE user_id=%s AND project_name=%s"
            cursor.execute(sql,(user_id, model))
            row = cursor.fetchone()
            print("count data",row[0])
            if active == 'on':
                active = '1'
            else:
                active = '0'
            print(row[0], user_id, model,category, pricing, active)
            if row[0] == 0:
                sql = "INSERT INTO trn_user_api (user_id, project_name, model_file_path, context_name, token, documentation,\
                                                number_of_hit_success, number_of_hit_failed, category, pricing, active)\
                                                VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(sql, (user_id, model, path_model, context, token, documentation, '0', '0', category, pricing, active))
                self.connection.commit()
            else:
                sql = "UPDATE trn_user_api SET model_file_path=%s, context_name=%s, token=%s,\
                                                documentation=%s, category=%s, pricing=%s, active=%s\
                                                 WHERE user_id=%s AND project_name=%s"
                cursor.execute(sql, (path_model, context, token, documentation, category, pricing, active, user_id, model))
                self.connection.commit()
        except psycopg2.OperationalError as e:
            self.ret_message['code'] = e.pgcode
            self.ret_message['db-description'] = e.pgerror
        finally:   
            self.disconnect()
        
        return self.ret_message

    def get_password(self, user_id):
        cursor = self.connection.cursor()
        sql = "SELECT * FROM mst_user WHERE user_id = %s"
        result = cursor.execute(sql, (user_id,))
        record = cursor.fetchone()
        # print(record)
        # print(result)
        
        if cursor.rowcount > 0:
            formatted_result = {'user_id': record[0],
                                'password': record[1],
                                'logged_in': record[2],
                                'name': record[3],
                                'organization': record[4],
                                'session_name': record[5]}
        else:
            formatted_result = {'user_id': None,
                                'password': None,
                                'logged_in': None,
                                'name': None,
                                'organization': None,
                                'session_name': None}
        
        return formatted_result

    def get_package_detail(self, id):
        cursor = self.connection.cursor()
        sql = "SELECT * FROM mst_package WHERE id = %s"

        cursor.execute(sql, (id,))
        record = cursor.fetchone()
        # print(record)
        # record = []
        if record != None:
            formatted_result = {'id': record[0],
                                'name': record[1],
                                'description': record[2],
                                'max_core': record[3],
                                'max_mem': record[4],
                                'price': record[5],
                                'img_url': record[6],
                                'code': 'pg-0',
                                'description': 'Query OK'}
        else:
             formatted_result = {'id': record[0],
                                'name': record[1],
                                'description': record[2],
                                'max_core': record[3],
                                'max_mem': record[4],
                                'price': record[5],
                                'img_url': record[6],
                                'code': 'pg-1',
                                'description': 'Empty rows'}
        return formatted_result

    def get_available_package(self):
        try:
            cursor = self.connection.cursor()
            sql = "SELECT * FROM mst_package"

            cursor.execute(sql)
            record = cursor.fetchall()
            # record = []
            if record != None:
                formatted_result = {'record': record,
                                    'code': 'pg-0',
                                    'description': 'Query OK'}
            else:
                formatted_result = {'record': None,
                                    'code': 'pg-1',
                                    'description': 'Empty rows'}
        except psycopg2.OperationalError as e:
            self.ret_message['code'] = e.pgcode
            self.ret_message['db-description'] = e.pgerror
        finally:
            self.disconnect()
            
            return formatted_result


    def create_session(self, user_id, package_id, num_of_core, num_of_mem, project_name, project_description, livy_id, livy_url, encapsulation):
        created_at = datetime.datetime.now().strftime("%Y%m%d %H:%M:%s")
        status = 1
        '''
        Status:
        Run: 1
        Dead: 2
        '''
        try:
            cursor = self.connection.cursor()
            created_at = created_at[0:17]
            num_of_mem = num_of_mem.replace('g','')
            sql = "INSERT INTO trn_project VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            print(user_id, package_id, num_of_core, num_of_mem, project_name, project_description, livy_id, livy_url, encapsulation, created_at, status)

            cursor.execute(sql, (user_id, package_id, num_of_core, num_of_mem, project_name, project_description, livy_id, livy_url, encapsulation, created_at, status))
            self.connection.commit()    
        except psycopg2.OperationalError as e:
            self.ret_message['code'] = e.pgcode
            self.ret_message['db-description'] = e.pgerror
        finally: 
            self.disconnect()
            return  self.ret_message
    
    def open_project(self, session_name, project_name):
        try:
            cursor = self.connection.cursor()
            sql = """SELECT * FROM trn_project INNER JOIN mst_user ON trn_project.user_id = mst_user.user_id
                        WHERE mst_user.session_name= %s and trn_project.project_name = %s"""
            cursor.execute(sql, (session_name, project_name))
            print(sql, (session_name, project_name))
            record = cursor.fetchone()
            self.ret_message = {'user_id': record[0],
                                'package_id': record[1],
                                'num_of_core': record[2],
                                'num_of_mem': record[3],
                                'project_name': record[4],
                                'project_description': record[5],
                                'livy_id': record[6],
                                'livy_url': record[7],
                                'encapsulation': record[8],
                                'created_at': record[9],
                                'status': record[10],
                                'codes': record[11],
                                'project_file': record[12],
                                'code': 'pg-0',
                                'description': 'Query OK'}
        except (Exception, psycopg2.DatabaseError) as error:
            print('error', error)
        except psycopg2.OperationalError as e:
            print('error', e.pgerror)
            self.ret_message['code'] = e.pgcode
            self.ret_message['db_description'] = e.pgerror
        finally:
            self.disconnect()
            return self.ret_message


    def save_project(self, user_id, project_name, project_file):
        try:
            cursor = self.connection.cursor()
            sql = """UPDATE trn_project SET 
                        project_file = %s
                        WHERE user_id= %s and project_name = %s"""
            rett = cursor.execute(sql, (project_file, user_id, project_name))
            print(rett)
            self.connection.commit()    
        except (Exception, psycopg2.DatabaseError) as error:
            print('error', error)
        except psycopg2.OperationalError as e:
            print('error', e.pgerror)
            self.ret_message['code'] = e.pgcode
            self.ret_message['db_description'] = e.pgerror
        finally:
            self.disconnect()
            return  self.ret_message

        return

    def update_livy_id(self, user_id, project_name, livy_id):

        try:
            cursor = self.connection.cursor()
            sql = """UPDATE trn_project SET 
                        livy_id = %s
                        WHERE user_id= %s and project_name = %s"""
            rett = cursor.execute(sql, (livy_id, user_id, project_name))
            print(rett)
            self.connection.commit()    
        except (Exception, psycopg2.DatabaseError) as error:
            print('error', error)
        except psycopg2.OperationalError as e:
            print('error', e.pgerror)
            self.ret_message['code'] = e.pgcode
            self.ret_message['db_description'] = e.pgerror
        finally:
            self.disconnect()
            return  self.ret_message

        return

    def get_user_projects(self, user_id):
        cursor = self.connection.cursor()
        sql = "SELECT user_id, package_id, num_of_core, num_of_mem, project_name, project_description, livy_id FROM trn_project WHERE user_id = %s"
        cursor.execute(sql, (user_id,))
        record = cursor.fetchall()
        # record = []
        if record != None:
            num_of_rows = len(record) // 3 + (1 if len(record) % 3 != 0 else 0)

            formatted_result = {'num_of_rows': num_of_rows,
                                'record': record,
                                'code': 'pg-0',
                                'description': 'Query OK'}
        else:
            formatted_result = {'num_of_rows': num_of_rows,
                                'record': None,
                                'code': 'pg-1',
                                'description': 'Empty rows'}
        return formatted_result


    def save_session(self,  project_name, project_description, livy_id, encapsulation, codes):
        return self.ret_message

    def get_quota_left(self, user_id):
        cursor = self.connection.cursor()
        sql = "SELECT * FROM trn_package WHERE user_id = %s"

        cursor.execute(sql, (user_id,))
        record = cursor.fetchone()
        # print(record)
        # record = []
        if record != None:
            formatted_result = {'user_id': record[0],
                                'package_id': record[1],
                                'max_core': record[2],
                                'max_mem': record[3],
                                'created_at': record[4],
                                'core_used': record[5],
                                'mem_used': record[6],
                                'core_left': record[7],
                                'mem_left': record[8]}
        else:
            formatted_result = {'user_id': None,
                                'package_id': None,
                                'max_core': None,
                                'max_mem': None,
                                'created_at': None,
                                'core_used': None,
                                'mem_used': None,
                                'core_left': None,
                                'mem_left': None,
                                'code': 'pg-1',
                                'description': 'Empty rows'}
        return formatted_result

    def update_quota(self, user_id, core_use, mem_use, core_used, mem_used, core_left, mem_left):
        core_left = int(core_left) - int(core_use)
        mem_left = int(mem_left) - int(mem_use)
        core_used = int(core_used) + int(core_use)
        mem_used = int(mem_used) + int(mem_use)
        try:
            print('update quota>>>', user_id, core_used, mem_used, core_left, mem_left, user_id)

            cursor = self.connection.cursor()
            sql = """UPDATE trn_package SET 
                        core_used = %s, mem_used = %s, core_left = %s, mem_left = %s 
                        WHERE user_id= %s"""
            rett = cursor.execute(sql, (core_used, mem_used, core_left, mem_left, user_id))
            print(rett)
            self.connection.commit()    
        except (Exception, psycopg2.DatabaseError) as error:
            print('error', error)
        except psycopg2.OperationalError as e:
            print('error', e.pgerror)
            self.ret_message['code'] = e.pgcode
            self.ret_message['db_description'] = e.pgerror
        finally:
            self.disconnect()
            return  self.ret_message

    def get_api_list(self):
        cursor = self.connection.cursor()
        sql = "SELECT * FROM trn_user_api"
        cursor.execute(sql, (user_id,))
        record = cursor.fetchall()
        # record = []
        if record != None:
            num_of_rows = len(record) // 3 + (1 if len(record) % 3 != 0 else 0)

            formatted_result = {'num_of_rows': num_of_rows,
                                'record': record,
                                'code': 'pg-0',
                                'description': 'Query OK'}
        else:
            formatted_result = {'num_of_rows': num_of_rows,
                                'record': None,
                                'code': 'pg-1',
                                'description': 'Empty rows'}
        return formatted_result
        self.disconnect()

    def disconnect(self):
        self.connection.close()
