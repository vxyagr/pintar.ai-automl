from flask import Flask
from flask import request 
import textwrap 
import requests
app = Flask(__name__)

session_url = 'http://192.168.0.20:8998/sessions'

@app.route("/create_session", methods=['POST'])
def create_session():
    # max_core = request.form['max_core']
    # max_memory = request.form['max_memory']
    # headers = {'Content-Type': 'application/json'}
    # data = {"kind": "pyspark", "conf": {"spark.cores.max": 2, "spark.executor.cores": 2, "spark.executor.memory": "2g"}}
    # result = requests.post(session_url, data = data, headers=headers)
    # print(result.json())

    # return result.json()
    return 'hellooo'