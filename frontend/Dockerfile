FROM node:10

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]