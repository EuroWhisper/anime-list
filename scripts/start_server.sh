#!/bin/bash

# navigate into current working directory

cd /home/ec2-user/anime-list

# install node modules

nvm use 16.13.1

npm install

npm install pm2 -g


# start our node app in the background using pm2

pm2 start 'npm run start'