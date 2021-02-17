#!/bin/sh

# set environmental variables
export HOST=http://localhost
export PORT=5000
export DB_CONNECTION_STRING=mongodb://mongo-user:mongo-password@mongodb:27017
export JWT_SECRET=thisisjwtsecret
export JWT_EXPIRE_IN=86400000
export JWT_ISSUER=IAmAnIssuer
export JWT_AUDIENCE=IAmAnAudience

# init the server
yarn start