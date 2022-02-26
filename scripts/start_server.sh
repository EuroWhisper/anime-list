#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh

nvm install node 16.13.1

sudo chmod -R 777 /home/ec2-user/anime-list


# navigate into current working directory

cd /home/ec2-user/anime-list

# install node modules

nvm use 16.13.1

npm install

npm install -g serve


npm install pm2 -g

# start our node app in the background using pm2

pm2 start 'npm run serve'