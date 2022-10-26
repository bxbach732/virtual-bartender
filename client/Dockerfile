FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --force --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]