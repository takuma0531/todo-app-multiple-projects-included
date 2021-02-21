FROM node:14.15.4

WORKDIR /app

# copy all necessary files from local
COPY src/backend ./


RUN yarn install --frozen-lockfile
RUN yarn build

# dispose src (all typescript files)
RUN rm -rf src

CMD ["yarn", "start"]