#!/bin/bash

# sudo /opt/lappstack-7.1.27-1/ctlscript.sh  start postgresql
# $ export FLASK_APP=/mnt/d/Kerjaan/2019/Juni/27Juni/bisnis-core/wsgi.py
export FLASK_APP=/data/bisnis-core/wsgi.py
export FLASK_DEBUG=1
# flask run --host 0.0.0.0 --port 5000
# gunicorn --bind 0.0.0.0:5000 wsgi:application
FLASK_APP=index.py flask run --host 0.0.0.0 --port 5000
