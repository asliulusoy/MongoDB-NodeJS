FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "npm", "start" ]

ENV PORT=4848

EXPOSE 4848

