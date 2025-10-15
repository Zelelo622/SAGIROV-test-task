FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN rm -rf .next && npm run build

EXPOSE 3000

CMD ["npm", "start"]
