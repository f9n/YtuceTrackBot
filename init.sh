#!/bin/bash
cd crawler;
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
bash init.sh &
cd ../bot; npm start
