#!/bin/sh

cd /opt/developer/app/src/backend
yarn install --frozen-lockfile

# keep the container running
while sleep 3600; do :; done