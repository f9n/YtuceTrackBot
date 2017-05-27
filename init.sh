#!/bin/bash

read -p 'There is .env file in bot?(y/n) : ' status
if [[ "$status" = "n" ]]; then
  read -p "Telegram Token:" token
  read -p "MongoDbUri:" mongodburi
  echo "MongoDbUri='$mongodburi'" > bot/.env
  echo "TelegramToken='$token'" >> bot/.env
fi
cd crawler;
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
bash init.sh &
cd ../bot; npm start
