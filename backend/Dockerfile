FROM node:20-alpine

WORKDIR /usr/src/app
COPY . .
RUN yarn install
EXPOSE 5000
CMD [ "yarn", "start" ]