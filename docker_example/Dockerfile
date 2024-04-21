FROM node:20.12.2-alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 44361

CMD ["node", "index.js"]