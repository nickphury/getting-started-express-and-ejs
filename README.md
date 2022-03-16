# Description
:)
## Installation
```sh
npm install
# Or  
pnpm install
# Because it's cool to use pnpm 
```

## Running
```sh
# development

npm start
# Or  
npm run start:dev

# watch mode
npm run dev

# Build
npm run build
```
# Environment variables
Create **.env** file and add the following content
```sh
#.env
SERVER_PORT = 3005
MYSQL_PORT = 6378 # Not used at the moment
REDIS_PORT = 6379
HOST = localhost
```
## Connection to free account on mongodb
sign up or login to : https://account.mongodb.com/account/login
- create a project
- create database (with free options)
- create user from Database Access tab, and allow the user the read/write right to all resources
- add ip address from Network Access tab, for training just allow all ip addresses (0.0.0.0/0)

```sh
#.env
MONGODB_USER = username
MONGODB_PWD = password
MONGODB_DATABASE = collection
```

## JWT Authentification variables
```sh
#.env
TOKEN_SECRET = 'use a too long long random string for the production :) '
TOKEN_REFRESH_SECRET = 'same_advice_as_token_secret:use_a_long_string'

# Time To Live
TOKEN_SECRET_TTL = '1h'
TOKEN_REFRESH_SECRET_TTL = '24h' 
```