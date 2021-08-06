# allow_origin = "127.0.0.1"
allow_origin = "35.232.38.183"

'''
Cluster Configuration
'''
hdfs_user = "hdfs"
# hdfs_host = "192.168.42.139"
hdfs_host = "10.128.0.2"
hdfs_port = "8020"
# hdfs_bin_file = '/opt/hadoop-3.2.0-2/hadoop/bin/hdfs'
hdfs_bin_file = 'hdfs'
# livy_host = "http://192.168.42.139:8998"
livy_host = "http://35.223.192.86:8999"



'''
File Transfer Configuration
'''
# local_username = "irfan"
local_username = "bigdata"
# local_user_folder = "/home/irfan/temp/"
local_user_folder = "/home/bigdata/temp/"

# remote_username = "ilmuwan"
remote_username = "hdfs"
# remote_host = "192.168.42.139"
remote_host = "34.70.153.221"
remote_user_folder = "/hadoop/anonymous/livy/"
remote_cluster = "hortonworks/cloudera"
# remote_cluster = "bitnami"

'''
System's Database Configuration
'''
db_user = "postgres"
db_password = "5k1d1p4pp4p"
db_host = "35.232.38.183"
db_port = "5432"
db_name = "pintarai"

'''
Configuration Validate Email
'''
user_email = "nur.ramadhan@datasynthesis.io"
pass_email = "mamet321"
# app_url = 'http://127.0.0.1:5000/'
app_url = 'http://35.232.38.183:5000/'