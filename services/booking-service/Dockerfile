FROM node:20.12.0

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5001

CMD ["npm", "start"]