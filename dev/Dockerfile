FROM node:14

RUN addgroup --gid 1234 --system dev-container 
RUN adduser --uid 1234 --system --home /opt/developer --shell "$(which ash)" --ingroup dev-container developer 

RUN mkdir /opt/developer/app
RUN chown -R developer:dev-container /opt/developer/app

USER developer