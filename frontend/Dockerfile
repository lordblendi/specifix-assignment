FROM node:20-alpine

WORKDIR /usr/src/app
COPY . .
RUN yarn install
EXPOSE 8080
CMD [ "yarn", "start" ]