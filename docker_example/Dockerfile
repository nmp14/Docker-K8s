FROM node:20.12.2-alpine3.19

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 44361

CMD ["node", "index.js"]