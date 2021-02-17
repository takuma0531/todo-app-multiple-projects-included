FROM node:14.15.4

WORKDIR /app

# copy all necessary files from local
COPY src/backend ./
COPY prod/docker-compose/init.sh ./

# add 755 permission to be executed
RUN chmod 0755 /app/init.sh

RUN yarn install --frozen-lockfile
RUN yarn build

# dispose src (all typescript files)
RUN rm -rf src