import textwrap
import io
import settings as s
class Template:
    def __init__(self):
        return 
    def session_assertion(self):
        code =  textwrap.dedent("""
            if 'pipeline_stages' not in locals():
                pipeline_stages = list()
                output_columns = list()

                def append_stage(stage_name):
                    global pipeline_stages
                    if stage_name not in pipeline_stages:
                        pipeline_stages.append(stage_name)

                def append_output_columns(table_name, column_name):
                    global output_column_name

                    output_column_name = table_name + '_' + column_name
                    if output_column_name not in output_columns:
                        output_columns.append(output_column_name)
            else:
                pass
        """)

        return code
    def import_mysql_database(self, database_url,
                            database_name,
                            database_table,
                            database_user,
                            database_password):

        connection_string =  '"jdbc:mysql://"' + database_url + "/" + database_name + '"'
        code = self.session_assertion() +  textwrap.dedent("""
            from pyspark import SparkConf, SparkContext
            from pyspark.sql import SparkSession, SQLContext, HiveContext
            import io, pandas as pd

            str_io = io.StringIO()

            conf = SparkConf()
            conf = (conf.set("deploy-mode","client"))


            spark = SparkSession.builder.config(conf=conf).enableHiveSupport().getOrCreate()
            """ + database_name + """_""" + database_table + """ = spark.read.format("jdbc").options(url=""" + connection_string + """,driver="org.mariadb.jdbc.Driver",dbtable=""" + '"' + database_table + '"' + """,user=""" + '"' + database_user + '"' + """,password=""" + '"' +  database_password + '"' + """).load()
            """ + database_name + """_""" + database_table + """.createOrReplaceTempView('""" + database_name + """_""" + database_table  + """')
            
            """ + database_name + """_""" + database_table + """.name='""" + database_name + """_""" + database_table + """'
            print('<b>Dataframe name: '), """ + database_name + """_""" + database_table + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str("""+database_name + """_""" + database_table+""".count())+'</b>')
           
            df_ = """ + database_name + """_""" + database_table + """ .limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            # print(df_.to_json())
            """)
        return code


    def import_postgresql_database(self, database_url,
                            database_name,
                            database_table,
                            database_user,
                            database_password):
        connection_string = '"jdbc:postgresql://' + database_url + "/" + database_name + '"'
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark import SparkConf, SparkContext
            from pyspark.sql import SparkSession, SQLContext, HiveContext
            import io, pandas as pd

            str_io = io.StringIO()

            conf = SparkConf()
            conf = (conf.set("deploy-mode","client"))
            # sc = SparkContext(conf=conf)

            spark = SparkSession.builder.config(conf=conf).enableHiveSupport().getOrCreate()
            # sqlContext = SQLContext.getOrCreate(sc)
            # hc = HiveContext(sc)
            """ + database_name + """_""" + database_table + """ = spark.read.format("jdbc").options(url=""" + connection_string + """,driver="org.postgresql.Driver",dbtable=""" + '"' + database_table + '"' + """,user=""" + '"' + database_user + '"' + """,password=""" + '"' +  database_password + '"' + """).load()
            """ + database_name + """_""" + database_table + """.createOrReplaceTempView('""" + database_name + """_""" + database_table  + """')
            
            """ + database_name + """_""" + database_table + """.name='""" + database_name + """_""" + database_table + """'
            print('<b>Dataframe name: '), """ + database_name + """_""" + database_table + """.name+"</b>"

            # """ + database_name + """_""" + database_table + """.show()
            # hc.sql("use """ + database_name + """")
            # try:
            #     hc.sql("drop table """ + database_name + """_""" + database_table + """")
            # except:
            #     print("ignore exception")
            # hc.sql("create table """ + database_name + """_""" + database_table + """ as select * from """ + database_name + """_""" + database_table  + """");
            print('<br><b>Number of rows: </b>')
            print('<b>'+str("""+database_name + """_""" + database_table+""".count())+'</b>')

            df_ = """ + database_name + """_""" + database_table + """ .limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            # print(df_.to_json())
            """)
        return code
    

        
    def show_tables(self, database_name):
        code = self.session_assertion() + textwrap.dedent("""
            df_tables = spark.sql('show tables')
            # df_tables.filter("database = '""" + database_name + """' or database= ''").toPandas().to_json()
            df_tables.filter("database= ''").toPandas().to_json()

        """)
        return code

    def show_model(self, session_name):
        
        code = self.session_assertion() + textwrap.dedent("""
            import subprocess as sb

            # cmd = 'hdfs dfs -ls /user/""" + session_name + """/models'.split()
            # cmd = ['hdfs', 'dfs' ,'-ls', '/user/""" + session_name + """/models' ]
            # files = sb.check_output(cmd).strip()
            print('halo')
        """)
        return code


    def describe_table(self, table_name):
        code = self.session_assertion() + textwrap.dedent("""
            import json
            result = json.loads(""" + table_name + """.schema.json())['fields']

            print(result)
        """)
        return code
    
    def convert(self, table_name, table):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.sql.functions import col , column
            import io, pandas as pd

            str_io = io.StringIO()
            schema_html = '""" + table + """'
            schema_html = schema_html.replace('<input type="text" readonly="" value="',"")
            schema_html = schema_html.replace('<input type="text" value="',"")
            schema_html = schema_html.replace('" placeholder="New Field Type">',"")
            schema_html = schema_html.replace('" placeholder="New Field Name">',"")
            schema_html = schema_html.replace('<tbody>',"")
            schema_html = schema_html.replace('</tbody>',"")
            schema_html = schema_html.replace('<div class="inpt-grp">',"")
            schema_html = schema_html.replace('</div>',"")

            # print(schema_html)
            df_schema = pd.read_html(schema_html)[0]
            df_schema.columns = ['old_name', 'old_type', 'new_name','new_type']           
            df_schema['old_name'] = df_schema.apply(lambda row:row['old_name'].replace('">', '') , axis=1)

            df_schema['old_type'] = df_schema.apply(lambda row:row['old_type'].replace('">', '') , axis=1)
            # print(df_schema)
            for item,row in df_schema.iterrows():
                # print(row['old_name']+"-"+row['new_name']+"|"+row['old_type']+"-"+row['new_type'])
                if ((row['old_name'] == row['new_name']) and (row['old_type'] == row['new_type'])):
                    # print('same')
                    pass
                else:
                    # print('not same')

                    if (row['old_name'] != row['new_name']):
                        """ + table_name + """ = """ + table_name + """.withColumnRenamed(row['old_name'], row['new_name'])
                    else:
                        pass

                    if (row['old_type'] != row['new_type']):
                        """ + table_name + """ = """ + table_name + """.withColumn(row['new_name'], col(row['new_name']).cast(row['new_type']))
                    else:
                        pass
            """+table_name+""".createOrReplaceTempView('"""+table_name+"""')
            """ + table_name+ """.name='""" + table_name + """'
            print('<b>Dataframe name: '), """ + table_name + """.name+"</b>"

            print('<br><b>Number of rows: </b>')
            print('<b>'+str("""+table_name+""".count())+'</b>')
            df_= """ + table_name + """.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def hivetable(self, database, dataframe):
        remote_cluster = s.remote_cluster
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark import SparkConf, SparkContext
            from pyspark.sql import SparkSession, SQLContext
            import io, pandas as pd
            import json

            # checktab = spark.sql('show databases')

            str_io = io.StringIO()
            remote_cluster='"""+remote_cluster+"""'
            spark.sql('create database if not exists """+database+"""')
            spark.sql('use """+database+"""')
            if remote_cluster == "bitnami":
                """+dataframe+""".write.mode('overwrite').saveAsTable('"""+dataframe+"""')
            else:
                """+dataframe+""".write.format("orc").mode('overwrite').saveAsTable('"""+dataframe+"""')
            """ + dataframe + """.createOrReplaceTempView('""" + dataframe +  """')

            """ + dataframe+ """.name='""" + dataframe + """'
            print('<b>Dataframe name: '), """ + dataframe + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str("""+dataframe+""".count())+'</b>')

            df_ = spark.sql('select * from """+dataframe+"""').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)

        """)
        return code

    def import_file(self, file, delimiter, header, session_name):
        import subprocess as sb
        import os
        filename_ori=file.filename
        hdfs_host = s.hdfs_host
        hdfs_port = s.hdfs_port
        # hdfs_bin_file = s.hdfs_bin_file
        remote_user_folder = s.remote_user_folder

        arr_filename = filename_ori.split('.')
        filename = arr_filename[0]
        # table_name = "et_" + session_name + "_" + filename
        cmd = ['ssh', s.hdfs_user +'@'+s.remote_host,  'hadoop fs -put -f ' + remote_user_folder + session_name + '/' + filename_ori + ' /user/' + session_name + '/']
        sb.call(cmd, stdout=open(os.devnull, 'wb'))
        code = self.session_assertion() + textwrap.dedent("""
            import subprocess as sb
            import os
            import io, pandas as pd

            str_io = io.StringIO()
            # cmd = ['hdfs', 'dfs' ,'-ls', '/user/""" + session_name + """' ]
            # folder_check = sb.call(cmd, stdout=open(os.devnull, 'wb'))
            # if folder_check != 0:
            #     cmd = ['hdfs', 'dfs', '-mkdir', '/user/""" + session_name + """' ]
            #     sb.call(cmd, stdout=open(os.devnull, 'wb'))
            #     print('creating folder...')
            # else:
            #     print('folder already exist...')
            #     pass

            
            # print(cmd)

            # sb.call(cmd)


            et_""" + filename + """ = spark.read.format("csv").option("delimiter", '""" + delimiter+ """').option("header",'"""+header+"""').load('hdfs://""" + hdfs_host + """:""" + hdfs_port + """/user/""" + session_name + """/""" + filename_ori + """')
            et_""" + filename + """.createOrReplaceTempView('et_""" + filename + """')
            # et_""" + session_name + """_""" + filename + """.show()

            et_""" + filename+ """.name='et_""" + filename + """'
            print('<b>Dataframe name: '), et_""" + filename + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(et_"""+filename+""".count())+'</b>')

            df_ = et_""" + filename + """.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def vector_assembler(self, table_name, input_columns, output_col):
        input_columns_str = ",".join(input_columns)
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import VectorAssembler
            import io, pandas as pd

            str_io = io.StringIO()
            VectorAssembler_""" + table_name + """ = VectorAssembler(
                    inputCols=[""" + input_columns_str + """],
                    outputCol='"""+ output_col +"""')
            features_column_va = [""" + input_columns_str + """]
            va_""" + table_name + """ = VectorAssembler_""" + table_name + """.transform(""" + table_name + """)
            va_""" + table_name + """.createOrReplaceTempView('va_""" + table_name +  """')

            va_""" + table_name + """.name = 'va_"""+table_name+"""'
            print("<b>Dataframe name : "), va_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(va_"""+table_name+""".count())+'</b>')

            append_stage('VectorAssembler_""" + table_name + """')
            # va_""" + table_name + """.show()
            df_ = va_""" + table_name + """.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def hypothesis(self, table_name, output_col, labels):
        code = self.session_assertion() + textwrap.dedent("""
            import pandas as pd, io
            from pyspark.ml.stat import ChiSquareTest

            str_io = io.StringIO()

            r = ChiSquareTest.test("""+table_name+""",'"""+output_col+"""','"""+labels+"""').head()
            var_pvalues = r.pValues
            var_statistic = r.statistics
            new_statistic = []
            len_colum = len(var_pvalues)
            print("<h3><b>Hypothesis Testing</b></h3>")
            i = 0
            while i < len_colum:
                if var_pvalues[i] <= 0.05:
                    print(features_column_va[i]+'<b style="color:green;"> significant effect on </b>"""+labels+""".<br>')
                else:
                    print(features_column_va[i]+'<b style="color:red;"> no significant effect on </b>"""+labels+""".<br>')

                round_statistic = round(var_statistic[i], 2)
                new_statistic.append(round_statistic)
                i += 1
           
            print("<br>pValues: "+str(r.pValues)+"<br>")
            print("degreesOfFreedom: "+str(r.degreesOfFreedom)+"<br>")
            print("statistics: "+str(new_statistic)+"<br>")
        """)
        return code
    
    def normalizer(self, table_name, input_col,output_col, p):
        # input_columns_str = ",".join(input_columns)
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import Normalizer
            import io, pandas as pd

            str_io = io.StringIO()
            Normalizer_""" + table_name + """ = Normalizer(                    
                    inputCol ='""" + input_col + """',
                    outputCol='"""+ output_col +"""',
                    p=""" + p + """)

            append_stage('Normalizer_""" + table_name + """')
            norm_""" + table_name + """ = Normalizer_""" + table_name + """.transform(""" + table_name + """)
            norm_""" + table_name + """.createOrReplaceTempView('norm_""" + table_name +  """')

            norm_""" + table_name + """.name = 'norm_"""+table_name+"""'
            print("<b>Dataframe name : "), norm_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(norm_"""+table_name+""".count())+'</b>')

            # norm_""" + table_name + """.show()
            df_ = norm_""" + table_name + """.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def pca(self, table_name, num_of_components, input_col, output_col):
        # input_columns_str = ",".join(input_columns)
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import PCA
            import io, pandas as pd

            str_io = io.StringIO()

            PCA_""" + table_name + """ = PCA(
                k="""+num_of_components+ """, 
                inputCol='"""+ input_col +"""', 
                outputCol='"""+ output_col +"""')
            
            append_stage('PCA_""" + table_name  + """')

            pca_""" + table_name + """ = PCA_""" + table_name + """.fit(""" + table_name + """)
            pca_""" + table_name + """ = pca_"""+ table_name + """.transform("""+ table_name + """)
            pca_""" + table_name + """.createOrReplaceTempView('pca_""" + table_name +  """')

            pca_""" + table_name + """.name = 'pca_"""+table_name+"""'
            print("<b>Dataframe name : "), pca_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(pca_"""+table_name+""".count())+'</b>')

            # pca_""" + table_name + """.show()
            df_ = pca_""" + table_name + """.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def bucketizer(self, table_name, split, input_col, output_col):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import Bucketizer
            import io, pandas as pd

            str_io = io.StringIO()
            
            Bucketizer_"""+ table_name + """ = Bucketizer(splits=[-float("inf"),"""+ split +""", float("inf")], inputCol='""" + input_col + """', outputCol='"""+ output_col +"""')
            append_stage('Bucketizer_"""+ table_name + """')

            bucket_"""+ table_name + """ = Bucketizer_"""+ table_name + """ .setHandleInvalid("keep").transform("""+ table_name +""")
            bucket_""" + table_name + """.createOrReplaceTempView('bucket_""" + table_name +  """')

            bucket_""" + table_name + """.name = 'bucket_"""+table_name+"""'
            print("<b>Dataframe name : "), bucket_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(bucket_"""+table_name+""".count())+'</b>')

            # bucket_""" + table_name + """.show()
            df_ = bucket_""" + table_name + """.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def standardscaler(self, table_name, input_col, output_col, withStd, withMean):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import StandardScaler
            import io, pandas as pd

            str_io = io.StringIO()

            StandardScaler_""" + table_name + """ = StandardScaler(withMean="""+withMean+""", withStd="""+withStd+""", inputCol='"""+ input_col +"""', outputCol='"""+ output_col +"""')
            
            append_stage('StandardScaler_""" + table_name + """')

            StandardScaler_""" + table_name + """ = StandardScaler_""" + table_name + """.fit("""+ table_name +""")
            stdscaler_"""+ table_name +""" = StandardScaler_""" + table_name + """.transform("""+ table_name +""")
            stdscaler_"""+ table_name +""".createOrReplaceTempView('stdscaler_"""+ table_name +"""')

            stdscaler_""" + table_name + """.name = 'stdscaler_"""+table_name+"""'
            print("<b>Dataframe name : "), stdscaler_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(stdscaler_"""+table_name+""".count())+'</b>')

            # stdscaler_"""+ table_name +""".show()
            df_ = stdscaler_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def tokenizer(self, table_name, input_col, output_col):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import Tokenizer
            import io, pandas as pd

            str_io = io.StringIO()

            fe_tknzr_""" + table_name + """ = Tokenizer(inputCol='"""+ input_col +"""', outputCol='"""+output_col+"""')
            append_stage('fe_tknzr_""" + table_name + """')

            tokenizer_"""+ table_name +""" = fe_tknzr_""" + table_name + """.transform("""+ table_name +""")
            tokenizer_"""+ table_name +""".createOrReplaceTempView('tokenizer_"""+ table_name +"""')
            
            tokenizer_""" + table_name + """.name = 'tokenizer_"""+table_name+"""'
            print("<b>Dataframe name : "), tokenizer_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(tokenizer_"""+table_name+""".count())+'</b>')

            # tokenizer_"""+ table_name +""".show()
            df_ = tokenizer_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def missingval(self, table_name, radioValue):
        code = self.session_assertion() + textwrap.dedent(""" 
            import numpy as np
            import io, pandas as pd

            str_io = io.StringIO()

            # radioValue=""
            df_contents=""

            if '"""+radioValue+"""'=='remove':
                df = """+ table_name +""".toPandas()
                df_contents = df.dropna(axis=0)
                missingval_"""+ table_name +""" = spark.createDataFrame(df_contents)
           
            elif '"""+radioValue+"""'=='average':
                df = """+ table_name +""".toPandas()
                df_contents = df.fillna(df.mean())
                missingval_"""+ table_name +""" = spark.createDataFrame(df_contents)

            else:
                df = """+ table_name +""".toPandas()
                missingval_"""+ table_name +""" = spark.createDataFrame(df)
            
            missingval_"""+ table_name +""".createOrReplaceTempView('missingval_"""+ table_name +"""')

            missingval_""" + table_name + """.name = 'missingval_"""+table_name+"""'
            print("<b>Dataframe name : "), missingval_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(missingval_"""+table_name+""".count())+'</b>')

            # missingval_"""+ table_name +""".show()
            df_ = missingval_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def stopword(self, table_name, input_col, output_col):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import StopWordsRemover
            import io, pandas as pd

            str_io = io.StringIO()

            fe_stpwd_""" + table_name + """ = StopWordsRemover(inputCol='"""+ input_col +"""', outputCol='"""+output_col+"""')
            append_stage('fe_stpwd_""" + table_name + """')

            stopword_"""+ table_name +""" = fe_stpwd_""" + table_name + """.transform("""+ table_name +""")
            stopword_"""+ table_name +""".createOrReplaceTempView('stopword_"""+ table_name +"""')

            stopword_""" + table_name + """.name = 'stopword_"""+table_name+"""'
            print("<b>Dataframe name : "), stopword_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(stopword_"""+table_name+""".count())+'</b>')

            # stopword_"""+ table_name +""".show()
            df_ =stopword_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def stringindexer(self, table_name, input_col, output_col):
        input_columns_str = ",".join(input_col)
        # input_col = []
        # print(input_col)
        code = self.session_assertion() +  textwrap.dedent("""

            from pyspark.ml.feature import StringIndexer
            import io, pandas as pd

            str_io = io.StringIO()

            from pyspark.ml import Pipeline

            # columnList = [item[0] for item in """+table_name+""".dtypes if item[1].startswith('string')] 
            # columnList=['cabin', 'embarked']
            columnList=["""+input_columns_str+"""]
            # print(columnList)
            StringIndexer_""" + table_name + """ = [StringIndexer(inputCol=column, outputCol=column+"_index").fit("""+table_name+""") for column in columnList]
            pipeline_idx = Pipeline(stages=StringIndexer_""" + table_name + """)
            append_stage('StringIndexer_""" + table_name + """')
            indexed_""" + table_name + """ = pipeline_idx.fit("""+table_name+""")

            category_name_""" + table_name + """ = dict()

            for idx, col in enumerate(columnList):
                current_col = indexed_"""+table_name+""".stages[idx]
                category_name_""" + table_name + """[col] = current_col.labels
            # print(category_name_""" + table_name + """)
            indexed_""" + table_name + """ = indexed_""" + table_name + """ .transform("""+table_name+""")
            indexed_""" + table_name + """.createOrReplaceTempView('indexed_"""+ table_name +"""')
            indexed_""" + table_name + """.name = 'indexed_"""+table_name+"""'
         

            print("<b>Dataframe name : "), indexed_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(indexed_"""+table_name+""".count())+'</b>')

            # indexed_"""+ table_name +""".show()
            df_ = indexed_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            # df_r.show()
        """)
        return code 

    def labelindexer(self, table_name, input_col, output_col, handleInvalid, stringOrderType):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import StringIndexer, IndexToString
            import io, pandas as pd

            str_io = io.StringIO()

            LabelIndexer_""" + table_name + """ = StringIndexer(inputCol='"""+ input_col +"""', outputCol='"""+ output_col +"""', handleInvalid='"""+handleInvalid+"""', stringOrderType='"""+stringOrderType+"""')
            labels = LabelIndexer_""" + table_name + """.fit(""" + table_name + """).labels

            append_stage('LabelIndexer_""" + table_name + """')

            model = LabelIndexer_""" + table_name + """.fit("""+ table_name +""")
            labelindexed_"""+ table_name +""" = model.transform("""+ table_name + """)
            labelindexed_"""+ table_name +""".createOrReplaceTempView('labelindexed_"""+ table_name +"""')

            labelindexed_""" + table_name + """.name = 'labelindexed_"""+table_name+"""'
            print("<b>Dataframe name : "), labelindexed_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(labelindexed_"""+table_name+""".count())+'</b>')

            # indexed_"""+ table_name +""".show()
            df_ = labelindexed_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def labelconverter(self, table_name, input_col, output_col, labels):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import IndexToString
            import io, pandas as pd

            str_io = io.StringIO()

            LabelConverter_""" + table_name + """ = IndexToString(inputCol='"""+ input_col +"""', outputCol='"""+ output_col +"""', labels="""+labels+""")
            append_stage('LabelConverter_""" + table_name + """')

            converted_"""+ table_name +""" = LabelConverter_""" + table_name + """.transform("""+ table_name + """)
            converted_"""+ table_name +""".createOrReplaceTempView('converted_"""+ table_name +"""')

            converted_""" + table_name + """.name = 'converted_"""+table_name+"""'
            print("<b>Dataframe name : "), converted_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(converted_"""+table_name+""".count())+'</b>')

            # converted_"""+ table_name +""".show()
            df_ = converted_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def onehot(self, table_name, input_col, output_col):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import OneHotEncoder
            import io, pandas as pd

            str_io = io.StringIO()

            OneHotEncoder_""" +table_name + """ = OneHotEncoder(inputCol='"""+ input_col +"""', outputCol='"""+ output_col +"""')
            append_stage('OneHotEncoder_""" + table_name + """')

            encoded_"""+ table_name +""" = OneHotEncoder_""" +table_name + """ .transform("""+ table_name +""")
            encoded_"""+ table_name +""".createOrReplaceTempView('encoded_"""+ table_name +"""')

            encoded_""" + table_name + """.name = 'encoded_"""+table_name+"""'
            print("<b>Dataframe name : "), encoded_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(encoded_"""+table_name+""".count())+'</b>')

            # encoded_"""+ table_name +""".show()
            df_ = encoded_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def minmax(self, table_name, input_col, output_col):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import MinMaxScaler
            import io, pandas as pd

            str_io = io.StringIO()

            MinMaxScaler_""" + table_name + """ = MinMaxScaler(inputCol='"""+ input_col +"""', outputCol='"""+output_col+"""')
            append_stage('MinMaxScaler_""" + table_name + """')

            model = MinMaxScaler_""" + table_name + """.fit("""+ table_name +""")
            minmax_"""+ table_name +""" = model.transform("""+ table_name +""")
            minmax_"""+ table_name +""".createOrReplaceTempView('minmax_"""+ table_name +"""')

            minmax_""" + table_name + """.name = 'minmax_"""+table_name+"""'
            print("<b>Dataframe name : "), minmax_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(minmax_"""+table_name+""".count())+'</b>')

            # minmax_"""+ table_name +""".show()
            df_ = minmax_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def hashingTf(self, table_name, num_of_features, input_col, output_col):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import HashingTF
            import io, pandas as pd

            str_io = io.StringIO()

            HashingTf_""" +  table_name  + """ = HashingTF(numFeatures="""+ num_of_features +""", inputCol='"""+ input_col +"""', outputCol='"""+ output_col +"""')
            append_stage('HashingTf_""" + table_name + """')


            tf_"""+ table_name +"""=  HashingTf_""" +  table_name  + """ .transform("""+ table_name +""")
            tf_"""+ table_name +""".createOrReplaceTempView('tf_"""+table_name+"""')

            tf_""" + table_name + """.name = 'tf_"""+table_name+"""'
            print("<b>Dataframe name : "), tf_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(tf_"""+table_name+""".count())+'</b>')

            # tf_"""+ table_name +""".show()
            df_ = tf_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def idf(self, table_name, min_doc_freq, input_col, output_col):
        code = self.session_assertion() +  textwrap.dedent("""
            from pyspark.ml.feature import IDF
            import io, pandas as pd

            str_io = io.StringIO()

            Idf_""" + table_name + """ = IDF(minDocFreq="""+ min_doc_freq +""", inputCol='"""+ input_col +"""', outputCol='"""+ output_col +"""')
            append_stage('Idf_""" + table_name + """')

            model = Idf_""" + table_name + """.fit("""+ table_name +""")
            idf_"""+ table_name +""" = model.transform("""+ table_name +""")
            idf_"""+ table_name +""".createOrReplaceTempView('idf_"""+table_name+"""')

            idf_""" + table_name + """.name = 'idf_"""+table_name+"""'
            print("<b>Dataframe name : "), idf_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(idf_"""+table_name+""".count())+'</b>')

            # idf_"""+ table_name +""".show()
            df_ = idf_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code 

    def countvectorizer(self, table_name, input_col, output_col):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.feature import CountVectorizer
            import io, pandas as pd

            str_io = io.StringIO()

            CountVectorizer_""" + table_name + """ = CountVectorizer(inputCol='"""+ input_col +"""', outputCol='"""+ output_col +"""')
            append_stage('CountVectorizer_""" + table_name + """')

            countvector = CountVectorizer_""" + table_name + """.fit("""+ table_name +""")
            cv_"""+ table_name +""" = countvector.transform("""+ table_name +""")
            cv_"""+ table_name +""".createOrReplaceTempView('cv_"""+ table_name +"""')

            cv_""" + table_name + """.name = 'cv_"""+table_name+"""'
            print("<b>Dataframe name : "), cv_""" + table_name + """.name+"</b>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(cv_"""+table_name+""".count())+'</b>')

            # cv_"""+ table_name +""".show()
            df_ = cv_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def kmeans(self, table_name, features_col, prediction_col, k, seed):
         # def kmeans(self, table_name, features_col, prediction_col, init_mode, tol, k, max_iter, seed, distance_measure):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.clustering import KMeans
            from pyspark.ml.evaluation import ClusteringEvaluator
            import io, pandas as pd

            str_io = io.StringIO()

            kmeans_""" + table_name + """ = KMeans(featuresCol='"""+features_col+"""', k="""+k+""", seed="""+seed+""")
            append_stage('kmeans_""" + table_name + """')

            kmeansmodel = kmeans_""" + table_name + """ .fit("""+table_name+""")
            prediction = kmeansmodel.transform("""+table_name+""")
            evaluator = ClusteringEvaluator(predictionCol='"""+prediction_col+"""',featuresCol='"""+features_col+"""')
            silhouette = evaluator.evaluate(prediction)*100

            prediction.name = 'sdf_kmeans_"""+ table_name +"""'
            print("<b>Dataframe name :"),  prediction.name+"</b><br>"
            print("<b>silhouette score = "+str('%.3f'%(silhouette)))+"</b><br>"
            

            sdf_kmeans_"""+ table_name +""" = prediction
            prediction.createOrReplaceTempView('sdf_kmeans_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(sdf_kmeans_"""+table_name+""".count())+'</b>')
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

    def gmm(self, table_name, features_col, label_col, prediction_col, k, probability_col,tol, max_iter, seed):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.clustering import GaussianMixture
            from pyspark.ml.evaluation import ClusteringEvaluator
            import io, pandas as pd

            str_io = io.StringIO()

            GMM_""" + table_name + """ = GaussianMixture(featuresCol='"""+features_col+"""',predictionCol='"""+prediction_col+"""', k="""+k+""", tol="""+tol+""", maxIter="""+max_iter+""", seed="""+seed+""")    
            append_stage('GMM_""" + table_name + """')

            gmmodel = GMM_""" + table_name + """.fit("""+table_name+""")
            prediction = gmmodel.transform("""+table_name+""")
            evaluator = ClusteringEvaluator(predictionCol='"""+prediction_col+"""',featuresCol='"""+features_col+"""')
            silhouette = evaluator.evaluate(prediction)*100
            prediction.name = 'sdf_GMM_"""+ table_name +"""'
            print("<b>Dataframe name :"),  prediction.name+"</b><br>"
            print("<b>silhouette score = "+str(silhouette))+"</b><br>"
           

            sdf_GMM_"""+ table_name +""" = prediction
            prediction.createOrReplaceTempView('sdf_GMM_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(sdf_GMM_"""+table_name+""".count())+'</b>')
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

    def linear_regression(self, table_name, features_col, label_col, prediction_col, max_iter, reg_param, elastic_net_param, tol, fit_intercept, standardization, solver, weight_col, aggregation_depth, loss, epsilon, train, test):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.regression import LinearRegression
            from pyspark.ml.evaluation import RegressionEvaluator
            import io, pandas as pd

            str_io = io.StringIO()

            (train_set, test_set) = """+table_name+""".randomSplit(["""+ train +""","""+ test +"""])
            linearregression_""" + table_name + """ = LinearRegression(featuresCol='"""+features_col+"""', maxIter="""+max_iter+""", regParam="""+reg_param+""", elasticNetParam="""+elastic_net_param+""", labelCol='"""+label_col+"""')
            append_stage('linearregression_""" + table_name + """')

            model = linearregression_""" + table_name + """.fit(train_set)
            prediction = model.transform(test_set)
            evaluator = RegressionEvaluator(predictionCol='"""+prediction_col+"""', labelCol='"""+label_col+"""')
            rmse = evaluator.evaluate(prediction, {evaluator.metricName: "rmse"})
            mse = evaluator.evaluate(prediction, {evaluator.metricName: "mse"})
            mae = evaluator.evaluate(prediction, {evaluator.metricName: "mae"})
            prediction.name = 'linearregression_"""+ table_name +"""'
            print("<b>Dataframe name :"),  prediction.name+"</b><br>"
            
            
            # prediction.select('"""+prediction_col+"""', '"""+label_col+"""').show()

            prediction.createOrReplaceTempView('linearregression_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            # print('<b>'+str(linearregression_"""+table_name+""".count())+'</b><br>')
            print('<b>'+str("""+table_name+""".count())+'</b><br>')
            print("<b>RMSE = "+str('%.3f'%(rmse))+"</b><br>")
            print("<b>MSE = "+str('%.3f'%(mse))+"</b><br>")
            print("<b>MAE = "+str('%.3f'%(mae))+"</b><br>")
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

    def logistic_regression(self, table_name, features_col, label_col, prediction_col, max_iter, reg_param, elastic_net_param, tol, fit_intercept, threshold, thresholds, probability_col, raw_prediction_col, standardization, weight_col, aggregation_depth, family, lower_bounds_on_coefficients, upper_bounds_on_coefficients, lower_bounds_on_intercepts, upper_bounds_on_intercepts, train, test):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.classification import LogisticRegression
            from pyspark.ml.evaluation import MulticlassClassificationEvaluator
            import io, pandas as pd

            str_io = io.StringIO()
            (train_set, test_set) = """+table_name+""".randomSplit(["""+ train +""","""+ test +"""])
            logisticregression_""" + table_name + """  = LogisticRegression(featuresCol='"""+features_col+"""', maxIter="""+max_iter+""", regParam="""+reg_param+""", elasticNetParam="""+elastic_net_param+""", labelCol='"""+label_col+"""')
            append_stage('logisticregression_""" + table_name + """')


            model = logisticregression_""" + table_name + """ .fit(train_set)
            prediction = model.transform(test_set)
            evaluator = MulticlassClassificationEvaluator(predictionCol='"""+prediction_col+"""', labelCol='"""+label_col+"""')
            accuracy = evaluator.evaluate(prediction, {evaluator.metricName: "accuracy"})*100
            recall = evaluator.evaluate(prediction, {evaluator.metricName: "weightedRecall"})*100
            precision = evaluator.evaluate(prediction, {evaluator.metricName: "weightedPrecision"})*100
            f1 = evaluator.evaluate(prediction, {evaluator.metricName: "f1"})*100
            # prediction.select('"""+label_col+"""', '"""+prediction_col+"""').show()
            prediction.name = 'sdf_LogisticRegression_"""+ table_name +"""'
            print("<b>Dataframe name :"),  prediction.name+"</b><br>"
            

            sdf_logisticregression_"""+ table_name +""" = prediction
            prediction.createOrReplaceTempView('sdf_logisticregression_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(sdf_logisticregression_"""+table_name+""".count())+'</b><br>')

            print("<b>accuracy = "+ str('%.3f'%(accuracy)) +"</b><br>")
            print("<b>recall = "+ str('%.3f'%(recall))+"</b><br>")
            print("<b>precision = "+ str('%.3f'%(precision))+"</b><br>") 
            print("<b>f1 = "+ str('%.3f'%(f1))+"</b><br>")
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

    def decision_tree(self, table_name, features_col, label_col, prediction_col, probability_col, raw_prediction_col, max_depth, max_bins, min_instances_per_node, min_info_gain, max_memory_in_mb, cache_node_ids, checkpoint_interval, impurity, seed, train, test):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.classification import DecisionTreeClassifier
            from pyspark.ml.evaluation import MulticlassClassificationEvaluator
            import io, pandas as pd

            str_io = io.StringIO()
            (train_set, test_set) = """+ table_name +""".randomSplit(["""+ train +""","""+ test +"""])
            DecisionTree_""" + table_name + """  = DecisionTreeClassifier(featuresCol='"""+features_col+"""', labelCol='"""+label_col+"""', predictionCol='"""+prediction_col+"""', probabilityCol='"""+probability_col+"""',\
                                    rawPredictionCol='"""+raw_prediction_col+"""', maxBins="""+max_bins+""", impurity='"""+impurity+"""')
            append_stage('DecisionTree_""" + table_name + """')

            model_dt = DecisionTree_""" + table_name + """.fit(train_set)
            prediction = model_dt.transform(test_set)
            evaluator = MulticlassClassificationEvaluator(predictionCol='"""+prediction_col+"""', labelCol='"""+label_col+"""')
            accuracy = evaluator.evaluate(prediction, {evaluator.metricName: "accuracy"})*100
            recall = evaluator.evaluate(prediction, {evaluator.metricName: "weightedRecall"})*100
            precision = evaluator.evaluate(prediction, {evaluator.metricName: "weightedPrecision"})*100
            f1 = evaluator.evaluate(prediction, {evaluator.metricName: "f1"})*100
            # prediction.select('"""+label_col+"""', '"""+prediction_col+"""').show()
            prediction.name = 'sdf_decisiontree_"""+table_name+"""'
            print("<b>Dataframe name : "), prediction.name+"</b><br>"
            

            sdf_decisiontree_"""+ table_name +""" = prediction
            prediction.createOrReplaceTempView('sdf_decisiontree_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(sdf_decisiontree_"""+table_name+""".count())+'</b><br>')
            print("<b>accuracy = "+ str('%.3f'%(accuracy))+"</b><br>")
            print("<b>recall = "+ str('%.3f'%(recall))+"</b><br>")
            print("<b>precision = "+ str('%.3f'%(precision))+"</b><br>") 
            print("<b>f1 = "+ str('%.3f'%(f1))+"</b><br>")
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()
            labelCol_dec = '"""+label_col+"""'
            print(html_str)
            """)
        return code

    def naive_bayes(self, table_name, features_col, label_col, prediction_col, thresholds, probability_col, raw_prediction_col, smoothing, weight_col, model_type, train, test):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.classification import NaiveBayes
            from pyspark.ml.evaluation import MulticlassClassificationEvaluator
            import io, pandas as pd

            str_io = io.StringIO()
            (train_set, test_set) = """+ table_name +""".randomSplit(["""+ train +""","""+ test +"""])
            naivebayes_""" + table_name + """ = NaiveBayes(featuresCol='"""+features_col+"""', labelCol='"""+label_col+"""', predictionCol='"""+prediction_col+"""', probabilityCol='"""+probability_col+"""',
                        rawPredictionCol='"""+raw_prediction_col+"""', smoothing="""+smoothing+""", modelType='multinomial') 
            append_stage('naivebayes_""" + table_name + """')


            model = naivebayes_""" + table_name + """.fit(train_set)
            prediction = model.transform(test_set)
            evaluator = MulticlassClassificationEvaluator(predictionCol='"""+prediction_col+"""', labelCol='"""+label_col+"""')
            accuracy = evaluator.evaluate(prediction, {evaluator.metricName: "accuracy"})*100
            recall = evaluator.evaluate(prediction, {evaluator.metricName: "weightedRecall"})*100
            precision = evaluator.evaluate(prediction, {evaluator.metricName: "weightedPrecision"})*100
            f1 = evaluator.evaluate(prediction, {evaluator.metricName: "f1"})*100
            # prediction.select('"""+label_col+"""', '"""+prediction_col+"""').show()
            prediction.name = 'sdf_naivebayes_"""+table_name+"""'
            print("<b>Dataframe name : "), prediction.name, "    </b><br>"
            print('<br><b>Number of rows: </b>')
            

            sdf_naivebayes_"""+ table_name +""" = prediction
            sdf_naivebayes_"""+ table_name +""".createOrReplaceTempView('sdf_naivebayes_"""+ table_name +"""')
            print('<b>'+str(sdf_naivebayes_"""+table_name+""".count())+'</b><br>')
            print("<b>accuracy = "+ str('%.3f'%(accuracy))+"</b><br>")
            print("<b>recall = "+ str('%.3f'%(recall))+"</b><br>")
            print("<b>precision = "+ str('%.3f'%(precision))+"</b><br>") 
            print("<b>f1 = "+ str('%.3f'%(f1))+"</b><br>")
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

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
                    subsampling_rate, train, test):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.ml.classification import RandomForestClassifier
            from pyspark.ml.evaluation import MulticlassClassificationEvaluator
            import io, pandas as pd

            str_io = io.StringIO()
            (train_set, test_set) = """+table_name+""".randomSplit(["""+ train +""","""+ test +"""])
            randomforest_""" + table_name + """ = RandomForestClassifier(featuresCol='"""+features_col+"""', \
                            labelCol='"""+label_col+"""', \
                            predictionCol='"""+prediction_col+"""', \
                            probabilityCol='"""+probability_col+"""', \
                            rawPredictionCol='"""+raw_prediction_col+"""', \
                            maxBins="""+max_bins+""",\
                            impurity='"""+impurity+"""', \
                            numTrees="""+num_trees+""")
            append_stage('randomforest_""" + table_name + """')


            model = randomforest_""" + table_name + """.fit(train_set)
            prediction = model.transform(test_set)
            evaluator = MulticlassClassificationEvaluator(predictionCol='"""+prediction_col+"""', labelCol='"""+label_col+"""')
            accuracy = evaluator.evaluate(prediction, {evaluator.metricName: "accuracy"})*100
            recall = evaluator.evaluate(prediction, {evaluator.metricName: "weightedRecall"})*100
            precision = evaluator.evaluate(prediction, {evaluator.metricName: "weightedPrecision"})*100
            f1 = evaluator.evaluate(prediction, {evaluator.metricName: "f1"})*100
            # prediction.select('"""+label_col+"""', '"""+prediction_col+"""').show()
            prediction.name = 'randomforest_"""+table_name+"""'
            print("<b>Dataframe name : "), prediction.name+"</b><br>"
            
            

            sdf_randomforest_"""+ table_name +""" = prediction
            sdf_randomforest_"""+ table_name +""".createOrReplaceTempView('sdf_randomforest_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(sdf_randomforest_"""+table_name+""".count())+'</b><br>')
            print("<b>accuracy ="+str('%.3f'%(accuracy))+"</b><br>")
            print("<b>recall ="+str('%.3f'%(recall))+"</b><br>")
            print("<b>precision ="+str('%.3f'%(precision))+"</b><br>")
            print("<b>f1 ="+str('%.3f'%(f1))+"</b><br>")
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

    def fp_growth(self, table_name, splits, min_support, min_confidence, items_col, prediction_col, num_partitions):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark.sql.functions import udf
            from pyspark.sql.types import ArrayType, StringType
            from pyspark.ml.fpm import FPGrowth
            import io, pandas as pd

            str_io = io.StringIO()

            def list_string(x):
                out_vec = []
                y = x.split('"""+ splits +"""')
                for t in y:
                    out_vec.append(t)
                return out_vec
            list_df = udf(lambda x: list(set(list_string(x))), ArrayType(StringType()))
            dataframe = """+table_name+""".withColumn('"""+items_col+"""', list_df('"""+items_col+"""'))
            fpgrowth = FPGrowth(minConfidence="""+min_confidence+""", minSupport="""+min_support+""", itemsCol='"""+items_col+"""')
            append_stage('fpgrowth')
            
            model = fpgrowth.fit(dataframe)
            association_rule = model.associationRules
            # association_rule.show()
            association_rule.name = 'sdf_fpgrowth_"""+table_name+"""'
            print("<b>Dataframe name : "), association_rule.name+"</b><br>"
            

            sdf_fpgrowth_"""+ table_name +""" = association_rule
            association_rule.createOrReplaceTempView('sdf_fpgrowth_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(sdf_fpgrowth_"""+table_name+""".count())+'</b>')
            df_ = association_rule.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

     
    def linear_svc(self, table_name, features_col, label_col, prediction_col, max_iter, reg_param, tol, raw_prediction_col, fit_intercept, standardization, threshold, weight_col, aggregation_depth, train, test):
        code = self.session_assertion() +  textwrap.dedent("""
            from pyspark.ml.classification import LinearSVC
            from pyspark.ml.evaluation import BinaryClassificationEvaluator
            import io, pandas as pd

            str_io = io.StringIO()

            (train_set, test_set) = """+table_name+""".randomSplit(["""+train+""","""+test+"""])
            linearsvc_""" + table_name + """ = LinearSVC(featuresCol='"""+features_col+"""', labelCol='"""+label_col+"""', predictionCol='"""+prediction_col+"""',\
                  maxIter="""+max_iter+""", regParam="""+reg_param+""", tol="""+tol+""", rawPredictionCol='"""+raw_prediction_col+"""')

            append_stage('linearsvc_""" + table_name + """')

            svmmodel = linearsvc_""" + table_name + """.fit(train_set)
            prediction = svmmodel.transform(test_set)
            evaluator = BinaryClassificationEvaluator(rawPredictionCol='"""+raw_prediction_col+"""', labelCol='"""+label_col+"""')
            areaUnderROC = evaluator.evaluate(prediction, {evaluator.metricName: "areaUnderROC"})*100
            areaUnderPR = evaluator.evaluate(prediction, {evaluator.metricName: "areaUnderPR"})*100
            prediction.name = 'sdf_linearsvc_"""+table_name+"""'
            print("<b>Dataframe name : "), prediction.name+"</b><br>"
           

            sdf_linearsvc_"""+ table_name +""" = prediction
            prediction.createOrReplaceTempView('sdf_linearsvc_"""+ table_name +"""')
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(sdf_linearsvc_"""+table_name+""".count())+'</b><br>')
            print("<b>areaUnderROC = "+str('%.3f'%(areaUnderROC))+"</b><br>")
            print("<b>areaUnderPR = "+str('%.3f'%(areaUnderPR))+"</b><br>")
            df_ = prediction.select('*').limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

    def arima(self, table_name, splits, numberofpredict, date_col, timeseries_col, start_p, d, start_q, max_p, max_d, max_q, start_P, D, start_Q, max_P, max_D, max_Q, max_order, m, seasonal, stationary, stepwise, solver, suppress_warnings, error_action, trace, scoring, business, by):
        code = self.session_assertion() + textwrap.dedent("""
            import datetime
            from datetime import date
            from pyramid.arima import auto_arima
            from pandas.tseries.offsets import DateOffset
            from pandas.tseries.offsets import BDay
            import numpy as np
            import warnings
            import io, pandas as pd

            str_io = io.StringIO()
            warnings.filterwarnings('ignore')

            # def ARIMA("""+table_name+""", splits='"""+splits+"""', numberofpredict="""+numberofpredict+""", dateCol='"""+date_col+"""', timeseriesCol='"""+timeseries_col+"""'):
            # def to_isoformat(current_format):
            #     year, month, day = current_format.split('"""+splits+"""')
            #     # year, month, day = current_format.split('-')
            #     dt = datetime.date(int(year), int(month), int(day))  
            #     return dt.isoformat()

            # def clean(row):
            #     dt, cols = row.split(",")
            #     isodate = to_isoformat(dt.replace("''", ''))
            #     return([isodate, float(cols)])
                

            # spark_df = """+table_name+""".rdd.map(lambda x: x)
            # cols1 = ['"""+date_col +"""', '"""+ timeseries_col +"""']
            # cols2 = [x for x in """+ table_name +""".columns if x in cols1]
            # rdd_airpass = spark_df.map(lambda x: x[cols2[0]]+","+str((x[cols2[1]])))
            # data = rdd_airpass.map(clean)
            # dataFrame = spark.createDataFrame(data, ['"""+date_col+"""', '"""+timeseries_col+"""'])
            # dataFrame_pandas = dataFrame.toPandas()
            # dataFrame_pandas['"""+date_col+"""'] = pd.to_datetime(dataFrame_pandas['"""+date_col+"""'])
            # dataFrame_pandas = dataFrame_pandas.set_index('"""+date_col+"""')
            # future_dates = [dataFrame_pandas.index[-1] + DateOffset(days=x) for x in range(1, """+numberofpredict+""")]
            # future_df = pd.DataFrame(index=future_dates, columns=dataFrame_pandas.columns)
            # final_df = pd.concat([dataFrame_pandas, future_df])
            # stepwise_model = auto_arima(dataFrame_pandas, start_p="""+start_p+""", start_q="""+start_q+""",
            #                         test = "adf",
            #                         trend = "ct",
            #                         max_p="""+max_p+""", max_q="""+max_q+""", max_d="""+max_d+""",
            #                         m="""+m+""",
            #                         d="""+d+""",
            #                         seasonal="""+seasonal+""",
            #                         start_P="""+start_P+""",
            #                         D="""+D+""",
            #                         start_Q="""+start_Q+""",
            #                         max_P="""+max_P+""",
            #                         max_D="""+max_D+""",
            #                         max_Q="""+max_Q+""",
            #                         max_order="""+max_order+""",
            #                         stationary="""+stationary+""",
            #                         solver='"""+solver+"""',
            #                         trace="""+trace+""",
            #                         error_action='"""+error_action+"""',  
            #                         suppress_warnings="""+suppress_warnings+""", 
            #                         scoring='"""+scoring+"""', 
            #                         stepwise="""+stepwise+""")
            # stepwise_model.fit(dataFrame_pandas)
            # final_df["forecast"] = stepwise_model.predict_in_sample(start=1, end=len(final_df))
            # final_df = final_df.reset_index().rename(columns = {"index":'"""+date_col+"""'})
            # final_df.fillna(np.nan, inplace=True)
            # final_df['date']=final_df['date'].astype(str)
            # arima_"""+ table_name +""" = spark.createDataFrame(final_df)
            # arima_"""+ table_name +""".createOrReplaceTempView('arima_"""+ table_name +"""')
            # final_df.name = 'arima_"""+table_name+"""'
            # print("<b>Dataframe name : "), final_df.name+"</b><br>"
            # # arima_"""+ table_name +""".show()
            # df_ = arima_"""+ table_name +""".limit(100).toPandas()
            # df_.to_html(buf=str_io, classes='table dataframe', index=False)
            # html_str = str_io.getvalue()

            business = """+business+"""
            def to_isoformat(current_format):
                year, month, day = current_format.split('"""+splits+"""')
                dt = datetime.date(int(year), int(month), int(day))  
                return dt.isoformat()
            
            #memisahkan kolom mana yang akan digunakan dengan format (tanggal(date series), kolom yang ingin di forecast)
            def clean(row):
                dt, passenger = row.split(",")
                isodate = to_isoformat(dt.replace("''", ''))
                return [isodate, float(passenger)]
            
            #membuat rdd dengan menggunakan dua fungsi diatas
            spark_df = """+table_name+""".rdd.map(lambda x: x)
            cols1 = ['"""+date_col +"""', '"""+ timeseries_col +"""']
            cols2 = [x for x in """+ table_name +""".columns if x in cols1]    
            rdd_airpass = spark_df.map(lambda x: x[cols2[0]]+","+str(x[cols2[1]]))
            data = rdd_airpass.map(clean)
            
            #membuat rdd menjadi spark dataframe
            dataFrame = spark.createDataFrame(data, ['"""+date_col+"""', '"""+timeseries_col+"""'])
            #membuat dataframe menjadi pandas dataframe
            dataFrame_pandas = dataFrame.toPandas()
            xlen = len(dataFrame_pandas)
            #mengubah kolom dateCol menjadi timestamp
            dataFrame_pandas['"""+date_col+"""'] = pd.to_datetime(dataFrame_pandas['"""+date_col+"""'])
            #mengubah kolom dateCol menjadi index dari pandas dataframe
            dataFrame_pandas = dataFrame_pandas.set_index('"""+date_col+"""')
            #membuat dataframe yang akan di forecast, dengan waktu yang akan ditentukan melalui parameter diatas
            future_dates = [dataFrame_pandas.index[-1] + DateOffset(**{'"""+by+"""':x}) for x in range(1, """+numberofpredict+""")]
            future_df = pd.DataFrame(index=future_dates, columns=dataFrame_pandas.columns)
            #Apabila analisis timeseries hanya ingin mengambil weekday saja dan mengabaikan weekend
            if business:
                #mapping tanggal-tanggal mana saja yang merupakan weekday, dan menghilangkan tanggal-tanggal yang terduplikasi
                future_df.index = future_df.index.map(lambda x: x + BDay())
                future_df = future_df.loc[~future_df.index.duplicated(keep='first')]
                #menggabungkan dataframe forecast dengan dataframe pandas
                final_df = pd.concat([dataFrame_pandas, future_df])
                #memisahkan train, dan test untuk prediksi model
                train, test = final_df[:xlen], final_df[xlen:]
                #Setting Parameter untuk model auto_arima
                stepwise_model = auto_arima(dataFrame_pandas, start_p="""+start_p+""", start_q="""+start_q+""",
                                    test = "adf",
                                    trend = "ct",
                                    max_p="""+max_p+""", max_q="""+max_q+""", max_d="""+max_d+""",
                                    m="""+m+""",
                                    d="""+d+""",
                                    seasonal="""+seasonal+""",
                                    start_P="""+start_P+""",
                                    D="""+D+""",
                                    start_Q="""+start_Q+""",
                                    max_P="""+max_P+""",
                                    max_D="""+max_D+""",
                                    max_Q="""+max_Q+""",
                                    max_order="""+max_order+""",
                                    stationary="""+stationary+""",
                                    solver='"""+solver+"""',
                                    trace="""+trace+""",
                                    error_action='"""+error_action+"""',  
                                    suppress_warnings="""+suppress_warnings+""", 
                                    scoring='"""+scoring+"""', 
                                    stepwise="""+stepwise+""")
                #fitting model arima dengan menggunakan dataframe train
                stepwise_model.fit(train)
                #mengekstrak nilai prediksi, confidence interval untuk hasil dari model yang akan diprediksi
                preds, conf_int = stepwise_model.predict(n_periods=test.shape[0], return_conf_int=True)
                #memasukan hasil forecast ke dalam dataframe final_df
                final_df["forecast"] = stepwise_model.predict_in_sample(start=1, end=len(final_df))
                #membuat dataframe untuk interval konfidensi dari prediksi arima yang telah buat
                max_min = pd.DataFrame(conf_int, columns=["std-", 'std+'], index=future_df.index)
                #menggabungkan dataframe final_df dengan dataframe max_min
                final_df = pd.concat([final_df, max_min], axis=1)
                final_df = final_df.reset_index().rename(columns = {"index":'"""+date_col+"""'})
                final_df['"""+date_col+"""'] = final_df['"""+date_col+"""'].astype('str')
                final_df.fillna(np.nan, inplace=True)
                # df_sparkfinal = spark.createDataFrame(final_df)
                # return df_sparkfinal
            
            #Apabila analisis timeseries parameter buisness False
            else:
                #menggabungkan dataframe forecast dengan dataframe pandas
                final_df = pd.concat([dataFrame_pandas, future_df])
                #memisahkan train, dan test untuk prediksi model
                train, test = final_df[:xlen], final_df[xlen:]
                #Setting Parameter untuk model auto_arima
                stepwise_model = auto_arima(dataFrame_pandas, start_p="""+start_p+""", start_q="""+start_q+""",
                                    test = "adf",
                                    trend = "ct",
                                    max_p="""+max_p+""", max_q="""+max_q+""", max_d="""+max_d+""",
                                    m="""+m+""",
                                    d="""+d+""",
                                    seasonal="""+seasonal+""",
                                    start_P="""+start_P+""",
                                    D="""+D+""",
                                    start_Q="""+start_Q+""",
                                    max_P="""+max_P+""",
                                    max_D="""+max_D+""",
                                    max_Q="""+max_Q+""",
                                    max_order="""+max_order+""",
                                    stationary="""+stationary+""",
                                    solver='"""+solver+"""',
                                    trace="""+trace+""",
                                    error_action='"""+error_action+"""',  
                                    suppress_warnings="""+suppress_warnings+""", 
                                    scoring='"""+scoring+"""', 
                                    stepwise="""+stepwise+""")
                #fitting model arima dengan menggunakan dataframe train
                stepwise_model.fit(train)
                #mengekstrak nilai prediksi, confidence interval untuk hasil dari model yang akan diprediksi
                preds, conf_int = stepwise_model.predict(n_periods=test.shape[0], return_conf_int=True)
                #memasukan hasil forecast ke dalam dataframe final_df
                final_df["forecast"] = stepwise_model.predict_in_sample(start=1, end=len(final_df))
                #membuat dataframe untuk interval konfidensi dari prediksi arima yang telah buat
                max_min = pd.DataFrame(conf_int, columns=["std-", 'std+'], index=future_df.index)
                #menggabungkan dataframe final_df dengan dataframe max_min
                final_df = pd.concat([final_df, max_min], axis=1)
                final_df = final_df.reset_index().rename(columns = {"index":'"""+date_col+"""'})
                final_df['"""+date_col+"""'] = final_df['"""+date_col+"""'].astype('str')
                final_df.fillna(np.nan, inplace=True)
                # df_sparkfinal = spark.createDataFrame(final_df)
                # return df_sparkfinal

            arima_"""+ table_name +""" = spark.createDataFrame(final_df)
            arima_"""+ table_name +""".createOrReplaceTempView('arima_"""+ table_name +"""')
            final_df.name = 'arima_"""+table_name+"""'
            print("<b>Dataframe name : "), final_df.name+"</b><br>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(arima_"""+table_name+""".count())+'</b>')
            # arima_"""+ table_name +""".show()
            df_ = arima_"""+ table_name +""".limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()
            print(html_str)


            # import sys
            # print(sys.version)
            # dt = datetime.date(int(2010), int(5), int(25))
            # print(dt.isoformat())

           
            # data.take(5)
            # df_sparkfinal.show()
            """)
        return code

    def line_chart_visual(self, table_name, x, y):
        y_str = ",".join(y)
        code = textwrap.dedent("""
            import json
            import io, pandas as pd

            str_io = io.StringIO()

            dataFrame_pandas = """+table_name+""".toPandas()
            dfx = dataFrame_pandas['"""+x+"""'].tolist()
            # # dfx = dfx.index()
            # # new_dfx =[]
            # # for i in dfx:
            # #     new_dfx.append(str(i))

            len_dfy = '"""+str(len(y))+"""'
            # print(len_dfy)
            my_list =[]
            if len_dfy != '1':
                for a in """+y_str+""":
                    dfy = dataFrame_pandas[a].tolist()

                    create_json={'name':a, 'result':dfy}
                    my_list.append(create_json)
                # print("masuk atas")
            else:
                y_str ="""+y_str+"""
                dfy = dataFrame_pandas[y_str].tolist()
                create_json={'name':y_str, 'result':dfy}
                my_list.append(create_json)
                # print("masuk bawah")
               

            res_dict = {'x':dfx,'y':my_list}
            my_json_string = json.dumps(res_dict, allow_nan=True)
            print(my_json_string)
            """)
        return code

    def bar_chart_visual(self, table_name, index, columns, agg):
        # code = textwrap.dedent("""
        #     import json
        #     import io, pandas as pd
        #     from pyspark.sql import SparkSession
        #     from pyspark.sql.functions import first

        #     str_io = io.StringIO()
        #     agg = '"""+agg+"""'
        #     dataFrame_pandas = """+table_name+""".toPandas()
        #     # df = dataFrame_pandas.pivot(index='"""+index+"""', columns='"""+columns+"""', values='values')
        #     df_sp = spark.createDataFrame(dataFrame_pandas)
        #     if agg == 'count':
        #         view = df_sp.groupby(df_sp."""+index+""").pivot('"""+columns+"""')."""+agg+"""()
        #     else:
        #         view = spark.sql('select """+agg+"""(""" + columns+""") from """ + table_name+ """ group by """+ index+"""')
        #     view_pd = view.toPandas()

        #     my_json = view_pd.to_json(orient='split')
        #     print(my_json)
        #     """)
        code = textwrap.dedent("""
            import json
            import io, pandas as pd
            from pyspark.sql import SparkSession
            from pyspark.sql.functions import first

            str_io = io.StringIO()
            agg = '"""+agg+"""'
            dataFrame_pandas = """+table_name+""".toPandas()[['"""+index+"""','"""+columns+"""']]
            # df = dataFrame_pandas.pivot(index='"""+index+"""', columns='"""+columns+"""', values='values')
            df_sp = spark.createDataFrame(dataFrame_pandas)
            if agg == 'count':
                view = df_sp.groupby(df_sp."""+index+""").pivot('"""+columns+"""')."""+agg+"""()
            else:
                view = spark.sql('select """+agg+"""(""" + columns+""") from """ + table_name+ """ group by """+ index+"""')
            view_pd = view.toPandas()

            my_json = view_pd.to_json(orient='split')
            print(my_json)
            """)
        return code

    def pie_chart_visual(self, table_name, agg, values):
        code = textwrap.dedent("""
            import json
            import io, pandas as pd
            from pyspark.sql import SparkSession
            from pyspark.sql.functions import first

            str_io = io.StringIO()

            dataFrame_pandas = """+table_name+""".toPandas()

            # new_df = pd.DataFrame({'values': new_values},index=new_labels)
            view = spark.sql('select """+values+""","""+agg+"""(""" + values+""") from """ + table_name+ """ group by """+ values+"""')
            view_pd = view.toPandas()
            
            my_json = view_pd.to_json(orient='split')
            print(my_json)
            """)
        return code

    def histogram_chart_visual(self, table_name, x1, x2):
        # code = textwrap.dedent("""
        #     import json
        #     import io, pandas as pd

        #     str_io = io.StringIO()

        #     dataFrame_pandas = """+table_name+""".toPandas()
        #     df = dataFrame_pandas.pivot(index='"""+index+"""', columns='"""+columns+"""', values='"""+values+"""')
        #     my_json = df.to_json(orient='split')
        #     print(my_json)
        #     """)
        code = textwrap.dedent("""
            # import json
            # import io, pandas as pd

            # str_io = io.StringIO()

            # dataFrame_pandas = """+table_name+""".toPandas()
            # dfx1 = dataFrame_pandas['"""+x1+"""'].tolist()
            # dfx2 = dataFrame_pandas['"""+x2+"""'].tolist()
            # res_dict = {'x1':dfx1,'x2':dfx2}
            
            # my_json_string = json.dumps(res_dict, allow_nan=True)
            # print(my_json_string)
            import json
            import io, pandas as pd
            str_io = io.StringIO()
            dataFrame_pandas = """+table_name+""".toPandas()
            dfx1 = dataFrame_pandas['"""+x1+"""'].tolist()
            dfx1 = [float(str(item)) for item in dfx1]
            dfx2 = dataFrame_pandas['"""+x2+"""'].tolist()
            dfx2 = [float(str(item)) for item in dfx2]
            res_dict = {'x1':dfx1,'x2':dfx2}
            my_json_string = json.dumps(res_dict, allow_nan=True)
            print(my_json_string)
            """)
        return code

    def violin_chart_visual(self, table_name, x, y, z):
        code = textwrap.dedent("""
            # import json
            # import io, pandas as pd

            # str_io = io.StringIO()

            # dataFrame_pandas = """+table_name+""".toPandas()
            # dfx = dataFrame_pandas['"""+x+"""'].tolist()
            # # # dfx = dfx.index()
            # # new_dfx =[]
            # # for i in dfx:
            # #     new_dfx.append(str(i))
            # dfy = dataFrame_pandas['"""+y+"""'].tolist()
            # dfz = dataFrame_pandas['"""+z+"""'].tolist()
            # res_dict = {'x':dfx,'y':dfy,'z':dfz}
            # # res_dict = str(dfx)+"|  "+str(dfy)
            # my_json_string = json.dumps(res_dict, allow_nan=True)
            # print(my_json_string)
            import json
            import io, pandas as pd
            from decimal import *
            
            str_io = io.StringIO()

            dataFrame_pandas = """+table_name+""".toPandas()
            dfx = dataFrame_pandas['"""+x+"""'].tolist()
            dfx = [str(item) for item in dfx]
            # # dfx = dfx.index()
            # new_dfx =[]
            # for i in dfx:
            #     new_dfx.append(str(i))
            dfy = dataFrame_pandas['"""+y+"""'].tolist()
            dfy = [float(str(item)) for item in dfy]
            
            dfz = dataFrame_pandas['"""+z+"""'].tolist()
            dfz = [str(item) for item in dfz]
            res_dict = {'x':dfx,'y':dfy,'z':dfz}
            # res_dict = str(dfx)+"|  "+str(dfy)
            my_json_string = json.dumps(res_dict, allow_nan=True)
            print(my_json_string)
            """)
        return code

    def scatter_chart_visual(self, table_name, x, y, z, category):
        code = textwrap.dedent("""
            # import json
            # import io, pandas as pd

            # str_io = io.StringIO()

            # df_array =[]    
            # dataFrame_pandas = """+table_name+""".toPandas()
            # loop = dataFrame_pandas."""+category+""".unique()
            # for k in loop:
            #     loca = dataFrame_pandas.loc[dataFrame_pandas['"""+category+"""'] == k]
            #     dfx = loca['"""+x+"""'].tolist()
            #     dfy = loca['"""+y+"""'].tolist()
            #     dfz = loca['"""+z+"""'].tolist()
            #     new_json = {
            #         'x':dfx,'y':dfy,'z':dfz,'category':k
            #     }
            #     df_array.append(new_json)
            
            # res_dict = {'values':df_array}
            # # res_dict = str(dfx)+"|  "+str(dfy)
            # my_json_string = json.dumps(res_dict, allow_nan=True)
            # print(my_json_string)
            import json
            import io, pandas as pd

            str_io = io.StringIO()

            df_array =[]    
            dataFrame_pandas = """+table_name+""".toPandas()
            loop = dataFrame_pandas."""+category+""".unique()
            for k in loop:
                loca = dataFrame_pandas.loc[dataFrame_pandas['"""+category+"""'] == k]
                dfx = loca['"""+x+"""'].tolist()
                dfx = [float(str(item)) for item in dfx]
                dfy = loca['"""+y+"""'].tolist()
                dfy = [float(str(item)) for item in dfy]
                dfz = loca['"""+z+"""'].tolist()
                dfz = [float(str(item)) for item in dfz]
                new_json = {
                    'x':dfx,'y':dfy,'z':dfz,'category':str(k)
                }
                df_array.append(new_json)
            
            res_dict = {'values':df_array}
            # res_dict = str(dfx)+"|  "+str(dfy)
            my_json_string = json.dumps(res_dict, allow_nan=True)
            print(my_json_string)
            """)
        return code
    
    def decision_tree_visual(self, filled, roundedCorners, roundLeaves):
        code = textwrap.dedent("""
        import zlib
        import base64
        from spark_tree_plotting import plot_tree
        categoricalNames = dict()
        labelNames = None
        for idx, col in enumerate(features_column_va):
            currentCol = pipeline_idx.stages[idx]
            if col == labelCol_dec:
                labelNames = currentCol.labels
            else:
                    #add value into categoricalNames
                categoricalNames[col+'_indexed'] = currentCol.labels

        png_string = plot_tree(model_dt,       #dipanggil langsung dari model decisiontree
                      featureNames=features_column_va,
                      categoryNames=categoricalNames,  #dipanggil langsung dari string indexer
                      classNames=labelNames,           #dipanggil langsung dari string indexer
                      filled=True,
                      roundedCorners=True,
                      roundLeaves=True
                     )
        encoded = base64.b64encode(png_string)
        print(encoded)
            """)
        return code

    def word_cloud(self, table_name, text_column):
        code = textwrap.dedent("""
            import numpy as np
            import pandas as pd
            from os import path
            from PIL import Image
            import re
            from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
            import base64
            from io import BytesIO

            import matplotlib.pyplot as plt
            # %matplotlib inline

            from Sastrawi.StopWordRemover.StopWordRemoverFactory import StopWordRemoverFactory
            factory = StopWordRemoverFactory()
            stopword = factory.create_stop_word_remover()
            dataFrame_pandas = """+table_name+""".toPandas()
            text_column = dataFrame_pandas['"""+text_column+"""']

            text_column = text_column.apply(lambda x: x.lower())
            # text_column = text_column.apply(lambda x: re.sub("((https):((//)|(\\\\))+([\w\d:#@%/;$()~_?\+-=\\\.&](#!)?)*)",'',x))
            # text_column = text_column.apply(lambda x: re.sub("((https?):((/)|(\\\\))+([\w\d:#@%/;$()~_?\+-=\\\.&](#!)?)*)", "",x))
            text_column = text_column.apply(lambda x: re.sub(r'[^\w\s]',' ',x)) 
            text_column = text_column.apply(lambda x: re.sub("[0-9]{1,9}",' ',x)) 
            text_column = text_column.apply(lambda x: re.sub("\s{2,}", " ",x)) 
            
            text_column = text_column.apply(lambda x: stopword.remove(x))
            # text_column = text_column.apply(lambda x : x.replace('rt', ''))

            text_column.apply(lambda x: x)

            wordcloud = WordCloud(max_font_size=100,width=800, height=400, max_words=100, background_color="white").generate(' '.join(text_column))
            # plt.figure(figsize=[20,10])
            # x = plt.imshow(wordcloud, interpolation="bilinear")
            # plt.axis("off")
            # plt.show()
            array = wordcloud.to_array()
            # encoded = base64.b64encode(array)
            pil_img = Image.fromarray(array)
            buff = BytesIO()
            pil_img.save(buff, format="JPEG")
            new_image_string = base64.b64encode(buff.getvalue()).decode("utf-8")
            # print(new_image_string)
            res_dict = {'values':new_image_string}
            my_json_string = json.dumps(res_dict)
            print(my_json_string)
            """)
        return code

    def maps(self, table_name, category, longitude, latitude):
        code = textwrap.dedent("""
            import json
            import io, pandas as pd
            import random

            str_io = io.StringIO()

            df_array =[]    
            

            dataFrame_pandas = """+table_name+""".toPandas()
            array_color =[]
            category = dataFrame_pandas."""+category+""".unique().tolist()
            for k in category :
                random_number = random.randint(0,16777215)
                hex_number = str(hex(random_number))
                hex_number ='#'+ hex_number[2:]
                array_color.append(hex_number)

            # print(array_color)
            for index, row in dataFrame_pandas.iterrows():
                # new_json = {
                #     'latitude':row['"""+latitude+"""'], 'longitude':row['"""+longitude+"""'], 'category':row['"""+category+"""']
                # }
                get_posElement = category.index(row['"""+category+"""'])
                get_posColor = array_color[get_posElement]

                new_json ={
                    'type':'Feature',
                    'geometry':{
                        'type':'Point',
                        'coordinates':[row['"""+longitude+"""'], row['"""+latitude+"""']]
                    },
                    'properties':{
                        'color':get_posColor,
                        'category':row['"""+category+"""']
                    }
                }
                df_array.append(new_json)
            res_dict = {'type': 'FeatureCollection', 'features':df_array}
            # # # res_dict = str(dfx)+"|  "+str(dfy)
            my_json_string = json.dumps(res_dict, allow_nan=True)
            print(my_json_string)
            """)
        return code

    def correlation(self, table_name, features):
        code = textwrap.dedent("""
            import json
            import io, pandas as pd
            from pyspark.ml.linalg import Vectors
            from pyspark.ml.stat import Correlation

            str_io = io.StringIO()
            dataFrame_pandas = """+table_name+""".toPandas()
            dfx = dataFrame_pandas['"""+features+"""'].tolist()
            dataset = []
            for k in dfx:   
                arr = [k]
                dataset.append(arr)
            dataset = spark.createDataFrame(dataset, ['features'])
            pearsonCorr = Correlation.corr(dataset, 'features', 'pearson').collect()[0][0]
            # res_dict = {'x':str(pearsonCorr)}
            # print(res_dict)
            rows = pearsonCorr.toArray().tolist()
            res_dict={'z':rows, 'y':features_column_va}
            my_json_string = json.dumps(res_dict, allow_nan=True)
            print(my_json_string)
            # print(rows)
            # print(array_vector)
            """)
        return code

    def merge_tables(self, table1_name, table2_name, on_table1, on_table2, how):
        df_join = table1_name + """_""" + table2_name
        code = textwrap.dedent("""
            import io, pandas as pd

            str_io = io.StringIO()
            """ + df_join + """ = spark.sql('select * from """ + table1_name + """ a """ + how + """ """ + table2_name + """ b on a.""" + on_table1 + """ = b.""" + on_table2 + """')
            """ + df_join + """.createOrReplaceTempView('""" + df_join + """')
            df = """ + df_join + """
            old_col=df.schema.names
            running_list=[]
            new_col=[]
            i=0
            for column in old_col:
                if(column in running_list):
                    new_col.append(column+"_"+str(i))
                    i=i+1
                else:
                    new_col.append(column)
                    running_list.append(column)
            df=df.toDF(*new_col)
            
            df_ = df.limit(100).toPandas()
           
            df_.to_html(buf=str_io, classes='table dataframe')
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def select_row(self, table_name, name, method, value):
        code = self.session_assertion() + textwrap.dedent("""
            import io, pandas as pd

            str_io = io.StringIO()
            row_""" + table_name + """ = spark.sql('select * from """+table_name+""" where """+name+""" """+method+""" """+value+"""')
            row_""" + table_name + """.createOrReplaceTempView('row_""" + table_name + """')
            final_df.name = 'row_"""+table_name+"""'
            print("<b>Dataframe name : "), final_df.name+"</b><br>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(row_"""+table_name+""".count())+'</b>')
            # row_""" + table_name + """.show()
            df_ = row_""" + table_name + """.limit(100).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def selectcol(self, table_name, input_columns):
        input_columns_str = ",".join(input_columns)
        code = self.session_assertion() + textwrap.dedent("""
            import io, pandas as pd

            str_io = io.StringIO()
            pandas_df = """+ table_name +""".limit(100).toPandas()
            pandas_df = pandas_df.loc[:, ["""+ input_columns_str +"""]]
            selectcol_""" + table_name + """ = spark.createDataFrame(pandas_df)

            selectcol_""" + table_name + """.createOrReplaceTempView('selectcol_""" + table_name +  """')
            
            final_df.name = 'selectcol_"""+table_name+"""'
            print("<b>Dataframe name : "), final_df.name+"</b><br>"
            print('<br><b>Number of rows: </b>')
            print('<b>'+str(selectcol_"""+table_name+""".count())+'</b>')
            # selectcol_""" + table_name + """.show()
            df_ = pandas_df
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
        """)
        return code

    def free_query(self, user_id, query):
        code = self.session_assertion() + textwrap.dedent("""
            from pyspark import SparkConf, SparkContext
            from pyspark.sql import SparkSession, SQLContext
            import io, pandas as pd

            str_io = io.StringIO()

            conf = SparkConf()
            conf = (conf.set("deploy-mode","client"))
            spark = SparkSession.builder.config(conf=conf).enableHiveSupport().getOrCreate()

            row_""" + table_name + """ = spark.sql(""" + query + """)
            df_ = row_""" + table_name + """.limit(1000).toPandas()
            df_.to_html(buf=str_io, classes='table dataframe', index=False)
            html_str = str_io.getvalue()

            print(html_str)
            """)
        return code

    def get_pipeline_stages(self):
        code = textwrap.dedent("""
            import json
            pipeline = dict()
            pipeline["stages"] = pipeline_stages

            print(json.dumps(pipeline))
        """)

        return code


    def save_model(self, session_name, file_name, stages, dataframe):
        '''
        jangan lupa di core_site.xml tambahkan setting proxy user untuk root biar bisa impoersonate user

        adduser di register
        chown user baru di folder hdfs /user/sessionname
        '''
        hdfs_host = s.hdfs_host
        hdfs_port = s.hdfs_port
        stages_list = ','.join(stages)
        print('stages_list-----------------', stages)
        
        code = textwrap.dedent("""
            from pyspark.ml import Pipeline, PipelineModel
            import subprocess as sb
            import os
            
            stages_list = [""" + stages_list + """]
            final_stages_list = list()
            for stage in stages_list:
                if type(stage).__name__ == 'list':
                    final_stages_list = final_stages_list + stage
                else:
                    final_stages_list.append(stage)

            pipeline = Pipeline(stages=final_stages_list)
            model = pipeline.fit("""+dataframe+""")

            # model.write().overwrite().save('/srv/samba/anonymous/livy/""" + file_name + """.pintarai')
            model.write().overwrite().save('hdfs://""" + hdfs_host + ":" + hdfs_port + """/user/""" + session_name +  """/models/""" + file_name + """.pintarai')

            cmd = ['hdfs', 'dfs', '-ls', '/user/""" + session_name + """/models/"""+file_name+""".pintarai']
            sb.call(cmd, stdout=open(os.devnull, 'wb'))


        """)

        return code