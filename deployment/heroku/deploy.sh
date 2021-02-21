#!/bin/sh

heroku container:login
heroku container:push web --app=$(echo $HEROKU_APP) --context-path=../../
heroku container:release web --app=$(echo $HEROKU_APP)
