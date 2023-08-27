FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4848

EXPOSE 4848

CMD ["npm", "start"]