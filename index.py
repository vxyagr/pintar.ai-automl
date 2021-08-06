from flask import  Flask, request, redirect, url_for, render_template, jsonify, Response, abort, session
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from model import DB 
from pristine import Livy
from user_mgmt import UserManagement
from crypto import Security
import datetime
import os
import subprocess
import json
import textwrap
import settings as s
import smtplib, ssl
from flask_paginate import Pagination, get_page_args
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from itsdangerous import URLSafeTimedSerializer, SignatureExpired
key_safe_time = URLSafeTimedSerializer('Rahasia-pengamaT-p!n+4%')

STATIC_URL_PATH = '/static' # Where the css is stored
STATIC_FOLDER = os.path.abspath('http://127.0.0.1:5000/static/assets')
allow_origin = s.allow_origin
ALLOWED_EXTENSION = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'csv', 'data'])
app = Flask(__name__)
CORS(app, resources={r"/create_session": {"origins": "http://127.0.0.1"}})
CORS(app, resources={r"/check_session": {"origins": "http://127.0.0.1"}})
CORS(app, resources={r"/import_database": {"origins": "http://127.0.0.1"}})
CORS(app, resources={r"/show_tables": {"origins": "http://127.0.0.1"}})
CORS(app, resources={r"/describe_table": {"origins": "http://127.0.0.1"}})
CORS(app, resources={r"/show_model": {"origins": "http://127.0.0.1"}})
CORS(app, resources={r"/main": {"origins": "http://127.0.0.1"}})

# CORS(app, resources={r"/create_session": {"origins": "http://0.0.0.0"}})
# CORS(app, resources={r"/check_session": {"origins": "http://0.0.0.0"}})
# CORS(app, resources={r"/import_database": {"origins": "http://0.0.0.0"}})
# CORS(app, resources={r"/show_tables": {"origins": "http://0.0.0.0"}})
# CORS(app, resources={r"/describe_table": {"origins": "http://0.0.0.0"}})
# CORS(app, resources={r"/show_model": {"origins": "http://0.0.0.0"}})
# CORS(app, resources={r"/main": {"origins": "http://0.0.0.0"}})

app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
queue_structure = {'cell_id':'', 'livy_id':'',  'statement_id':''}
queue = list()

UPLOAD_FOLDER = '/path/to/the/uploads'

# @app.errorhandler(402)
# def page_not_found(e):
#     return render_template('402.html'), 402

@app.errorhandler(403)
def page_not_found(e):
    return render_template('403.html'), 403

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(405)
def page_not_found(e):
    return render_template('405.html'), 405

@app.errorhandler(502)
def page_not_found(e):
    return render_template('502.html'), 502

@app.errorhandler(503)
def page_not_found(e):
    return render_template('502.html'), 503

@app.errorhandler(504)
def page_not_found(e):
    return render_template('504.html'), 504

@app.errorhandler(505)
def page_not_found(e):
    return render_template('505.html'), 505

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/landing")
def landing():
    return render_template('index.html')

@app.route("/login")
def login():
    return render_template('login.html')

@app.route("/register")
def register():
    return render_template('register.html')

@app.route("/forgot_password")
def forgot_password():
    return render_template('forgot-password.html')

def get_user_management(user_id):
    user_management = UserManagement()
    quota = user_management.get_quota_left(user_id)
    return quota

def get_available_package():
    db = DB()
    ret_message = db.get_available_package()
    return ret_message

def get_users(offset, per_page, data):

    return data[offset: offset + per_page]


@app.route("/create_user", methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def create_user():
    d = request.form.to_dict()
    user_id = d['user_id']
    organization = d['organization']
    name = d['name']
    password = d['password']

    user_management = UserManagement() 

    result = user_management.register_user(name, organization, user_id, password)
    
    if result['description'] == 'OK':
        # validate_user_email(user_id)
        message_result = "success create user"
        return render_template('email-check.html', message=message_result, email=user_id)
    elif result['description'] == 'FAIL':
        message_result = "failed create user"
        return render_template('register.html', message=message_result)
    elif result['description'] == 'EXIST':
        message_result = "user already exist"
        return render_template('register.html', message=message_result)
    

@app.route("/main", methods=['GET', 'POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def validate_password():
    user_data = dict()
    offset = 0
    per_page = 10
    if request.method == 'POST':
        d = request.form.to_dict()
        user_id = d['user_id']
        password= d['password']

        crypt = Security()
        ret_message = crypt.validate_password(user_id, password)
        print(ret_message, user_id)
        if ret_message['code'] != 'security-0':
            return render_template('login.html', message=ret_message['description'] )
        else:
            user_management = UserManagement()

        session['user_id'] = ret_message['user_information']['user_id']
        session['session_name'] = ret_message['user_information']['session_name']
        session['name'] = ret_message['user_information']['name']
        session['organization'] = ret_message['user_information']['organization']
        session['password'] = password
        quota = user_management.get_quota_left(user_id)
        projects = user_management.get_user_projects(user_id)

        page, per_page, offset = get_page_args(page_parameter='page', per_page_parameter='per_page')

        total = len(projects['record'])

        
        pagination_users = get_users(offset, per_page, projects['record'])
        print(pagination_users)

        pagination = Pagination(page=page, 
                            per_page=per_page, 
                            total=total
                            )
        #####
        user_data['quota'] = quota
        # user_data['projects'] = projects
        # print('user_data---------',user_data)
        # print('session_name ---------------',session['session_name'])
        if quota['user_id'] == None:
            packages  = get_available_package()['record']
            return render_template('package-area.html', packages = packages)
        else:
            return render_template('project-area.html', user_data = user_data, data_user=pagination_users, page=page,
                           per_page=per_page,
                           pagination=pagination)
    else:
        if 'user_id' in session:
            user_management = UserManagement()
            quota = user_management.get_quota_left(session['user_id'])
            projects = user_management.get_user_projects(session['user_id'])
            user_data['quota'] = quota
            # user_data['projects'] = projects
           
            page, per_page, offset = get_page_args(page_parameter='page', per_page_parameter='per_page')

            total = len(projects['record'])

            
            pagination_users = get_users(offset, per_page, projects['record'])
            print(pagination_users)

            pagination = Pagination(page=page, 
                                per_page=per_page, 
                                total=total
                                )
            return render_template('project-area.html', user_data = user_data, data_user=pagination_users, page=page,
                           per_page=per_page,
                           pagination=pagination)
        else:
            return redirect(url_for('login'))

# @app.route("/back_main")
# def back_main():    
#     return render_template('project-area.html', user_data = session["user_data"])

@app.route("/create_project", methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def create_project():
    if 'session_name' in session:
        user_session_name = session['session_name']

        user_mgmt = UserManagement()
        request_data = request.values.to_dict()
        data_json = request_data
        is_new = 'new' #Create project will always new
        user_id = session['user_id'] 
        project_name = data_json['project_name'] 
        project_description = data_json['project_description'] 
        encapsulation = '1' 
        num_of_core = data_json['num_of_core']
        num_of_mem = data_json['num_of_memory']

        quota = user_mgmt.get_quota_left(user_id)
        package_id = quota['package_id'] 

        print(quota)

        livy = Livy()
        result = livy.create_session(is_new,
                            user_id,
                            user_session_name,
                            package_id,
                            project_name,
                            project_description,
                            encapsulation,
                            num_of_core,
                            num_of_mem)
        print("creat mess",result['code'])
        if result['code'] == 'livy-0':
            response = {'result': result}
            new_project_params = '/new/' + user_id + '/' + project_name
            return redirect(url_for('.datalabs', is_new=is_new, session_name=user_session_name, project_name=project_name))
        elif result['code'] == 'livy-3':
            if 'msg' in result['description']:
                # return 'Unable to create session...' + result['description']['msg']
                return render_template('validation.html', msg='Unable to create session...' +result['description']['msg'])
            else:
                # return 'Unable to create session...' + result['description']
                return render_template('validation.html', msg='Unable to create session...' +result['description'])
        else:
            # return 'Unable to create session...' +result['description']
            return render_template('validation.html', msg='Unable to create session...' +result['description'])
    else:
        return redirect(url_for('login'))


@app.route("/save_project", methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def save_project():
    user_id = session['user_id']

    request_data = request.get_data()
    data_json = json.loads(request_data)
    project_name = data_json['project_name']
    project_file = data_json['project_file']

    db = DB() 

    result = db.save_project(user_id, project_name, project_file)
    print(project_file, project_name)
    return jsonify({'result': 'project saved'})

# @app.route("/publish_api", methods=['POST'])
# @cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
# def publish_api():
#     user_id = session['user_id']

#     request_data = request.get_data()
#     data_json = json.loads(request_data)
#     model = data_json['model']
#     project_name = data_json['context_name']
#     project_file = data_json['token']

#     db = DB() 

#     result = db.publish_api(user_id, project_name, project_file)
#     print(project_file, project_name)
#     return jsonify({'result': 'save project success'})
    
@app.route("/open_project/<session_name>/<project_name>", methods=['GET'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def open_project(session_name, project_name):
    # print('allow origin.............', allow_origin)

    # print("session : "+session_name)
    if 'session_name' in session:
        user_session_name = session['session_name']
        print("username"+session['session_name'])
        if session_name == user_session_name: 
            return redirect(url_for('.datalabs', is_new='open', session_name=session_name, project_name=project_name))
        else:
            return "You are not authorized to view open this project."
    else:
        return redirect(url_for('login'))

@app.route("/project_area/<state>", methods=['GET'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def project_area(state):
    offset = 0
    per_page = 10
    user_id = session['user_id']
    user_management = UserManagement()
    quota = user_management.get_quota_left(user_id)
    projects = user_management.get_user_projects(user_id) 
    user_data = dict()
    user_data['quota'] = quota
    # user_data['projects'] = projects
    # user_data['state'] = state

    page, per_page, offset = get_page_args(page_parameter='page', per_page_parameter='per_page')

    total = len(projects['record'])

    
    pagination_users = get_users(offset, per_page, projects['record'])

    pagination = Pagination(page=page, 
                        per_page=per_page, 
                        total=total
                        )

    return render_template('project-area.html', user_data = user_data, data_user=pagination_users, page=page,
                           per_page=per_page,
                           pagination=pagination)

@app.route("/subscribe_package/<package_id>", methods=['GET'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def subscribe_package(package_id):
    db = DB()

    package = db.get_package_detail(package_id)
    package_id = package['id']
    user_id = session['user_id']
    max_core = core_left = package['max_core']
    max_mem = mem_left = package['max_mem']
    created_at = datetime.datetime.now().strftime("%Y%m%d %H:%M:%s")
    core_used = 0
    mem_used = 0
    session_name = session['session_name']

    db = DB() 
    user_mgmt = UserManagement()
    db.subscribe_package(user_id, package_id, max_core, max_mem, created_at, core_used, mem_used, core_left, mem_left)
    user_mgmt.create_folder(folder_name='', session_name=session_name, quota='10', is_home_folder=True)

    return redirect(url_for('.project_area', state='new'))


@app.route("/datalabs/<is_new>/<session_name>/<project_name>", methods=['GET'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def datalabs(is_new, session_name, project_name):
    if 'session_name' in session:
        session_user_name = session['session_name']
    
        if session_user_name == session_name:
            db = DB()

            result = db.open_project(session_name, project_name)
            if result['code'] == 'pg-0':
                response = dict()
                response['result'] = dict()
                response['result']['description'] = dict()
                response['result']['description']['name'] = result['project_name']
                response['result']['description']['description'] = result['project_description']
                response['result']['description']['livy_id'] = result['livy_id']
                response['result']['description']['file'] = result['project_file']
                response['result']['description']['num_of_core'] = result['num_of_core']
                response['result']['description']['num_of_mem'] = result['num_of_mem']
                response['result']['description']['num_of_mem'] = result['num_of_mem']
                response['result']['description']['is_new'] = is_new
                return render_template('datalabs.html', response=response, password=session['password'])
                    
            else:
                "An error has occured while opening this project."

        else:
            return "You are not authorized to view open this project."
    else:
        return redirect(url_for('login'))

@app.route("/create_session", methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def create_session():
    user_mgmt = UserManagement()
    request_data = request.get_data()
    data_json = json.loads(request_data)
    print('create session: ', data_json)

    is_new = data_json['is_new'] 
    user_id = session["user_id"]
    session_name = session["session_name"]
    project_name = data_json['project_name'] 
    project_description = data_json['project_description'] 
    encapsulation = 'private' 
    num_of_core = data_json['num_of_core']
    num_of_mem = data_json['num_of_memory']

    quota = user_mgmt.get_quota_left(user_id)
    package_id = quota['package_id'] 


    livy = Livy()
    result = livy.create_session(is_new,
                        user_id,
                        session_name,
                        package_id,
                        project_name,
                        project_description,
                        encapsulation,
                        num_of_core,
                        num_of_mem)
    response = jsonify({'result': result})
    print('response --> ', response)
    return response

@app.route("/check_session/<user_id>/<livy_id>/<project_name>", methods=['GET'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def check_session(user_id, livy_id, project_name):
    livy = Livy()
    result = livy.check_session(user_id, livy_id, project_name) 

    response = jsonify({'result': result})

    return response

@app.route("/check_statement/<user_id>/<livy_id>/<project_name>/<statement_id>", methods=['GET'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def check_statement(user_id, livy_id, project_name, statement_id):
    livy = Livy()
    result = livy.check_statement(user_id, livy_id, project_name, statement_id) 

    response = jsonify({'result': result})

    return response

@app.route('/import_database', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def import_database():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    print(data_json)
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']
    database_type = data_json['database_type']
    database_url = data_json['database_url']
    database_name = data_json['database_name']
    database_table = data_json['database_table']
    database_user = data_json['database_user']
    database_password = data_json['database_password']

    livy = Livy()

    result = livy.import_database(user_id, livy_id, database_type, database_url, database_name, database_table, database_user, database_password)
    response = jsonify({'result': result})
 
    return response


@app.route('/show_tables', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def show_tables():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.show_tables(user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/show_model', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content-Type','Authorization'])
def show_model():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']
    session_name = session["session_name"]

    livy = Livy()

    result = livy.show_model(session_name, user_id, livy_id)
    response = jsonify({'result': result})

    return response


@app.route('/describe_table', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def describe_table():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']
    table_name = data_json['table_name']

    livy = Livy()

    result = livy.describe_table(user_id, livy_id, table_name)
    response = jsonify({'result': result})

    return response

@app.route('/convert', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def convert():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']
    table = data_json['table']
    table_name = data_json['table_name']

    livy = Livy()

    result = livy.convert(user_id, livy_id, table_name, table)
    response = jsonify({'result': result})

    return response


@app.route('/import_file', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def import_file():
    print(request.files.get('file'))
    file=request.files.get('file')
    # file=request.files['file']
    # user_id = request.form['user_id']
    delimiter = request.form['delimiter']
    header = request.form['header']
    livy_id = request.form['livy_id']
    session_name = session['session_name']
    # delimiter = "," #nanti dilempar dari interface
    livy = Livy()

    result = livy.import_file(file, delimiter, header, session_name, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/hivetable', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def hivetable():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    database = session['session_name']
    dataframe = data_json['dataframe']

    livy_id = data_json['livy_id']
    livy = Livy()

    result = livy.hivetable(database, dataframe, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/merge_tables', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def merge_tables():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table1_name = data_json['table1_name']
    table2_name = data_json['table2_name']
    on_table1 = data_json['on_table1']
    on_table2 = data_json['on_table2']
    how = data_json['how']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.merge_tables(table1_name, table2_name, on_table1, on_table2, how, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/selectcol', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def selectcol():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_columns = data_json['input_columns']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.selectcol(table_name, input_columns, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/select_row', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def select_row():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    name = data_json['name']
    method = data_json['method']
    value = data_json['value']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.select_row(table_name, name, method, value, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/custom_query', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def custom_query():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    # table_name = data_json['table_name']
    dataframe = data_json['dataframe']
    custom = data_json['custom']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.custom_query(dataframe, custom, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/vector_assembler', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def vector_assembler():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_columns = data_json['input_columns']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.vector_assembler(table_name, input_columns, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/hypothesis', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def hypothesis():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    labels = data_json['labels']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.hypothesis(table_name, output_col, labels, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/normalizer', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def normalizer():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    on_table = data_json['on_table']
    output_col = data_json['output_col']
    p = data_json['p']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.normalizer(table_name, on_table, output_col, p, user_id, livy_id, )
    response = jsonify({'result': result})

    return response

@app.route('/bucketizer', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def bucketizer():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    split = data_json['split']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.bucketizer(table_name, split, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/standardscaler', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def standardscaler():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    withStd = data_json['withStd']
    withMean = data_json['withMean']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.standardscaler(table_name, input_col, output_col, withStd, withMean, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/tokenizer', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def tokenizer():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.tokenizer(table_name, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/missingval', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def missingval():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    radioValue = data_json['radioValue']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.missingval(table_name, radioValue, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/stopword', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def stopword():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.stopword(table_name, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/stringindexer', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def stringindexer():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    # handleInvalid = data_json['handleInvalid']
    # stringOrderType = data_json['stringOrderType']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.stringindexer(table_name, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/labelindexer', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def labelindexer():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    handleInvalid = data_json['handleInvalid']
    stringOrderType = data_json['stringOrderType']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.labelindexer(table_name, input_col, output_col, handleInvalid, stringOrderType, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/labelconverter', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def labelconverter():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    labels = data_json['labels']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.labelconverter(table_name, input_col, output_col, labels, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/onehot', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def onehot():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.onehot(table_name, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/minmax', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def minmax():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.minmax(table_name, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/pca', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def pca():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    num_of_components = data_json['num_of_components']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.pca(table_name, num_of_components, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/hashingTf', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def hashingTf():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    num_of_features = data_json['num_of_features']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.hashingTf(table_name, num_of_features, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/idf', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def idf():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    min_doc_freq = data_json['min_doc_freq']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.idf(table_name, min_doc_freq, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/countvectorizer', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def countvectorizer():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    input_col = data_json['input_col']
    output_col = data_json['output_col']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.countvectorizer(table_name, input_col, output_col, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/kmeans', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def kmeans():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    # label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    # init_mode = data_json['init_mode']
    # tol = data_json['tol']
    k = data_json['k']
    # max_iter = data_json['max_iter']
    seed = data_json['seed']
    # distance_measure = data_json['distance_measure']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.kmeans(table_name, features_col, prediction_col, k, seed, user_id, livy_id)
    # result = livy.kmeans(table_name, features_col, prediction_col, init_mode, tol, k, max_iter, seed, distance_measure, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/gmm', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def gmm():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    probability_col = data_json['probability_col']
    tol = data_json['tol']
    k = data_json['k']
    max_iter = data_json['max_iter']
    seed = data_json['seed']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.gmm(table_name, features_col, label_col, prediction_col, k, probability_col,tol, max_iter, seed, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/linear_regression', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def linear_regression():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    max_iter = data_json['max_iter']
    reg_param = data_json['reg_param']
    elastic_net_param = data_json['elastic_net_param']
    tol = data_json['tol']
    fit_intercept = data_json['fit_intercept']
    standardization = data_json['standardization']
    solver = data_json['solver']
    weight_col = data_json['weight_col']
    aggregation_depth = data_json['aggregation_depth']
    loss = data_json['loss']
    epsilon = data_json['epsilon']
    train = data_json['train']
    test = data_json['test']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.linear_regression(table_name, features_col, label_col, prediction_col, max_iter, reg_param, elastic_net_param, tol, fit_intercept, standardization, solver, weight_col, aggregation_depth, loss, epsilon, train, test, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/logistic_regression', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def logistic_regression():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    max_iter = data_json['max_iter']
    reg_param = data_json['reg_param']
    elastic_net_param = data_json['elastic_net_param']
    tol = data_json['tol']
    fit_intercept = data_json['fit_intercept']
    threshold = data_json['threshold']
    weight_col = data_json['weight_col']
    thresholds = data_json['thresholds']
    probability_col = data_json['probability_col']
    raw_prediction_col = data_json['raw_prediction_col']
    standardization = data_json['standardization']
    aggregation_depth = data_json['aggregation_depth']
    family = data_json['family']
    lower_bounds_on_coefficients = data_json['lower_bounds_on_coefficients']
    upper_bounds_on_coefficients = data_json['upper_bounds_on_coefficients']
    lower_bounds_on_intercepts = data_json['lower_bounds_on_intercepts']
    upper_bounds_on_intercepts = data_json['upper_bounds_on_intercepts']
    train = data_json['train']
    test = data_json['test']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.logistic_regression(table_name, features_col, label_col, prediction_col, max_iter, reg_param, elastic_net_param, tol, fit_intercept, threshold, thresholds, probability_col, raw_prediction_col, standardization, weight_col, aggregation_depth, family, lower_bounds_on_coefficients, upper_bounds_on_coefficients, lower_bounds_on_intercepts, upper_bounds_on_intercepts, train, test, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/decision_tree', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def decision_tree():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    probability_col = data_json['probability_col']
    raw_prediction_col = data_json['raw_prediction_col']
    max_depth = data_json['max_depth']
    max_bins = data_json['max_bins']
    min_instances_per_node = data_json['min_instances_per_node']
    min_info_gain = data_json['min_info_gain']
    max_memory_in_mb = data_json['max_memory_in_mb']
    cache_node_ids = data_json['cache_node_ids']
    checkpoint_interval = data_json['checkpoint_interval']
    impurity = data_json['impurity']
    seed = data_json['seed']
    train = data_json['train']
    test = data_json['test']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.decision_tree(table_name, features_col, label_col, prediction_col, probability_col, raw_prediction_col, max_depth, max_bins, min_instances_per_node, min_info_gain, max_memory_in_mb, cache_node_ids, checkpoint_interval, impurity, seed, train, test, user_id, livy_id)
    response = jsonify({'result': result})
    
    return response

@app.route('/naive_bayes', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def naive_bayes():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    weight_col = data_json['weight_col']
    thresholds = data_json['thresholds']
    probability_col = data_json['probability_col']
    raw_prediction_col = data_json['raw_prediction_col']
    smoothing = data_json['smoothing']
    model_type = data_json['model_type']
    train = data_json['train']
    test = data_json['test']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.naive_bayes(table_name, features_col, label_col, prediction_col, thresholds, probability_col, raw_prediction_col, smoothing, weight_col, model_type, train, test, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/random_forest', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def random_forest():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    probability_col = data_json['probability_col']
    raw_prediction_col = data_json['raw_prediction_col']
    max_depth = data_json['max_depth']
    max_bins = data_json['max_bins']
    min_instances_per_node = data_json['min_instances_per_node']
    min_info_gain = data_json['min_info_gain']
    max_memory_in_mb = data_json['max_memory_in_mb']
    cache_node_ids = data_json['cache_node_ids']
    checkpoint_interval = data_json['checkpoint_interval']
    impurity = data_json['impurity']
    num_trees = data_json['num_trees']
    feature_subset_strategy = data_json['feature_subset_strategy']
    seed = data_json['seed']
    subsampling_rate = data_json['subsampling_rate']
    train = data_json['train']
    test = data_json['test']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.random_forest(table_name, features_col, label_col, prediction_col, probability_col, raw_prediction_col, max_depth, max_bins, min_instances_per_node, min_info_gain, max_memory_in_mb, cache_node_ids, checkpoint_interval, impurity, num_trees, feature_subset_strategy, seed, subsampling_rate, train, test, user_id, livy_id)
    response = jsonify({'result': result})
    
    return response

@app.route('/fp_growth', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def fp_growth():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    splits = data_json['splits']
    min_support = data_json['min_support']
    min_confidence = data_json['min_confidence']
    items_col = data_json['items_col']
    prediction_col = data_json['prediction_col']
    num_partitions = data_json['num_partitions']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.fp_growth(table_name, splits, min_support, min_confidence, items_col, prediction_col, num_partitions,  user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/linear_svc', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def linear_svc():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features_col = data_json['features_col']
    label_col = data_json['label_col']
    prediction_col = data_json['prediction_col']
    max_iter = data_json['max_iter']
    reg_param = data_json['reg_param']
    tol = data_json['tol']
    raw_prediction_col = data_json['raw_prediction_col']
    fit_intercept = data_json['fit_intercept']
    standardization = data_json['standardization']
    threshold = data_json['threshold']
    weight_col = data_json['weight_col']
    aggregation_depth = data_json['aggregation_depth']
    train = data_json['train']
    test = data_json['test']
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.linear_svc(table_name, features_col, label_col, prediction_col, max_iter, reg_param, tol, raw_prediction_col, fit_intercept, standardization, threshold, weight_col, aggregation_depth, train, test, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/arima', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def arima():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    splits = data_json['splits']
    numberofpredict = data_json['numberofpredict']
    date_col = data_json['date_col']
    timeseries_col = data_json['timeseries_col']
    start_p = data_json['start_p']
    d = data_json['d']
    start_q = data_json['start_q']
    max_p = data_json['max_p']
    max_d = data_json['max_d']
    max_q = data_json['max_q']
    start_P = data_json['start_P']
    D = data_json['D']
    start_Q = data_json['start_Q']
    max_P = data_json['max_P']
    max_D = data_json['max_D']
    max_Q = data_json['max_Q']
    max_order = data_json['max_order']
    m = data_json['m']
    seasonal = data_json['seasonal']
    stationary = data_json['stationary']
    stepwise = data_json['stepwise']
    solver = data_json['solver']
    suppress_warnings = data_json['suppress_warnings']
    error_action = data_json['error_action']
    trace = data_json['trace']
    scoring = data_json['scoring']
    business =  data_json['business']
    by = data_json['by']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.arima(table_name, splits, numberofpredict, date_col, timeseries_col, start_p, d, start_q, max_p, max_d, max_q, start_P, D, start_Q, max_P, max_D, max_Q, max_order, m, seasonal, stationary, stepwise, solver, suppress_warnings, error_action, trace, scoring, business, by, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/get_pipeline_stages', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def get_pipeline_stages():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    
    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.get_pipeline_stages(user_id, livy_id)
    response = jsonify({'result': result})
    
    return response

@app.route('/save_model', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def save_model():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    
    user_id = data_json['user_id']
    session_name = session['session_name']
    livy_id = data_json['livy_id']
    stages = data_json['stages']
    file_name = data_json['file_name']
    dataframe = data_json['dataframe']

    print('stages----------',stages)
    livy = Livy()

    result = livy.save_model(session_name, file_name, stages, dataframe, user_id, livy_id)
    response = jsonify({'result': result})
    
    return response

#visualization
@app.route('/line_chart_visual', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def line_chart_visual():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    x = data_json['x']
    y = data_json['y']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.line_chart_visual(table_name, x, y, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/bar_chart_visual', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def bar_chart_visual():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    index = data_json['index']
    columns = data_json['columns']
    agg = data_json['agg']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.bar_chart_visual(table_name, index, columns, agg, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/pie_chart_visual', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def pie_chart_visual():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    agg = data_json['agg']
    values = data_json['values']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.pie_chart_visual(table_name, agg, values, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/histogram_chart_visual', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def histogram_chart_visual():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    x1 = data_json['x1']
    x2 = data_json['x2']
    # values = data_json['values']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.histogram_chart_visual(table_name, x1, x2, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/violin_chart_visual', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def violin_chart_visual():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    x = data_json['x']
    y = data_json['y']
    z = data_json['z']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.violin_chart_visual(table_name, x, y, z, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/scatter_chart_visual', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def scatter_chart_visual():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    x = data_json['x']
    y = data_json['y']
    z = data_json['z']
    category = data_json['category']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.scatter_chart_visual(table_name, x, y, z, category, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/decision_tree_visual', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def decision_tree_visual():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    filled = data_json['filled']
    roundedCorners = data_json['roundedCorners']
    roundLeaves = data_json['roundLeaves']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.decision_tree_visual(filled, roundedCorners, roundLeaves, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/word_cloud', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def word_cloud():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    text_column = data_json['text_column']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.word_cloud(table_name, text_column, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/maps', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def maps():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    category = data_json['category']
    longitude = data_json['longitude']
    latitude = data_json['latitude']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.maps(table_name, category, longitude, latitude, user_id, livy_id)
    response = jsonify({'result': result})

    return response

@app.route('/correlation', methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def correlation():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    table_name = data_json['table_name']
    features = data_json['features']

    user_id = data_json['user_id']
    livy_id = data_json['livy_id']

    livy = Livy()

    result = livy.correlation(table_name, features, user_id, livy_id)
    response = jsonify({'result': result})

    return response

#Publish API
@app.route('/publish_api', methods=['POST'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def publish_api():
    request_data = request.get_data()
    print(request_data)
    data_json = json.loads(request_data)
    model = data_json['model']
    context = data_json['context']
    token = data_json['token']
    documentation = data_json['documentation']
    category = data_json['category']
    pricing = data_json['pricing']
    active = data_json['active']

    user_id = session['user_id']
    session_name = session['session_name']
    path_model = "/user/"+session_name+"/models/"+model+".pintarai"
    db = DB() 

    result = db.save_publish_api(user_id, session_name, path_model, model, context, token, documentation, category, pricing, active)

    textparam=textwrap.dedent("""{"session_name" : """+session_name+""","context_name" : """+context+""","token" : """+token+"""}""")

    if result['code'] == 'pg-0':
        response = jsonify({'result': 'Successfully save and publish API, you can now see your API in marketplace...','json_param':textparam,'url':'localhost/api'})
    else:
        response = jsonify({'result': 'Fail to save and publish API, reason: ' + result['db-description'],'json_param':textparam,'url':'localhost/api'})


    # return jsonify({'result': 'save project success'})
    return response

# @app.route("/import_file", methods=['POST'])
# def import_file():
#     # print('files--------------' ,request.files)
#     if request.method == 'POST':
#         # check if the post request has the file part
#         if 'file' not in request.files:
#             return render_template('member-area.html')
#         file = request.files['file']

   
#         # if user does not select file, browser also
#         # submit a empty part without filename
#         if file.filename == '':
#             # flash('No selected file')
#             return redirect(request.url)

#         if file and allowed_file(file.filename):
#             filename = secure_filename(file.filename)
#             file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#             return redirect(url_for('uploaded_file',
#                                     filename=filename))
#         file_name = request.form['file_name'] 
      
#         return render_template('member-area.html')

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSION



def write_file(self, file_name, folder_name, write_to_hdfs, username):
    subprocess.call(["scp", "/tmp/" + username + "/" + file_name, " ilmuwan@pygmy:/home/ilmuwan/" + username + "/" + folder_name])
    
    subprocess.call(["hdfs dfs", "put",  "/home/ilmuwan/" + username + "/" + folder_name + "/" + file_name + " /user/" + username + "/" + folder_name])

def validate_user_email(email_adrress):
    user_email = s.user_email
    pass_email =  s.pass_email
    app_url = s.app_url
    message = MIMEMultipart("alternative")
    message["Subject"] = "Validation e-mail companies, Datalabas Pintar.ai!"
    message["From"] = user_email
    message["To"] = email_adrress
    token = key_safe_time.dumps(email_adrress, salt='email-confirm')
    print(token)
    link =app_url+"confirm_email/"+email_adrress+"/"+token

    html = """\
    <html>
    <body>
    <center>
        <h1><b>Datalabas Pintar.ai<b></h1>
        <b>Congratulations, your company has been successfully registered with email : <b>%s<br>
        Click on the link below to activate and verify your email address:<br>
        <a href="%s" target="_blank">%s</a><br>
        <strong style="color:red">Don't reply to this email!</strong>
        </center>
    </body>
    </html>
    """%(email_adrress,link,token)

    # Turn these into plain/html MIMEText objects
    part2 = MIMEText(html, "html")
    message.attach(part2)

    # Create secure connection with server and send email
    # try:
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(user_email, pass_email)
        server.sendmail(
            user_email, email_adrress, message.as_string()
        )
    print("success send email !")
    # except:  
        # print('Something went wrong...')
    return token

@app.route('/confirm_email/<email_adrress>/<token>', methods=['GET'])
def confirm_email(email_adrress, token):
    print("masuk sini")
    try:
        email = key_safe_time.loads(token, salt='email-confirm', max_age=86400)
        db = DB()
        db.save_confirm_email(email_adrress)
    except SignatureExpired:
        return render_template('email-fail.html')
    return render_template('email-active.html')

@app.route('/logout')
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def logout():
    session.pop('user_id', None)
    session.pop('session_name', None)
    session.pop('name', None)
    session.pop('organization', None)
    session.pop('password', None)
    return redirect(url_for('login'))
    # session.clear()
    # return render_template('login.html')

@app.route("/stop_session", methods=['POST'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def stop_session():
    request_data = request.get_data()
    data_json = json.loads(request_data)
    livy_id = data_json['livy_id']
    livy = Livy()
    result = livy.stop_livy_session(livy_id)
    response = jsonify({'result': result})
    return response

@app.route('/api_marketplace', methods=['GET'])
@cross_origin(origin=allow_origin,headers=['Content-Type','Authorization'])
def api_marketplace():
    return render_template('api-marketplace.html')
