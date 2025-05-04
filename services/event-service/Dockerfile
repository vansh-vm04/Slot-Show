FROM node:20.12.0

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5004

CMD ["npm","run","dev"]