Create **.env** file and add the following content

SERVER_PORT=3005

MYSQL_PROT=6378 // Not used at the moment
REDIS_PORT=6379

HOST=localhost

## Connection to free account on mongodb
sign up or login to : https://account.mongodb.com/account/login
- create a project
- create database (with free options)
- create user from Database Access tab, and allow the user the read/write right to all resources
- add ip address from Network Access tab, for training just allow all ip addresses (0.0.0.0/0)


MONGODB_USER = **username**
MONGODB_PWD = **password**
MONGODB_DATABASE = **collection**
TOKEN_SECRET = **'use a too long long random string for the production :) '**