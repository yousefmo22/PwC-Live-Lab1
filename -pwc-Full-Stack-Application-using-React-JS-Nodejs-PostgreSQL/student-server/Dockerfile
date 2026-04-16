FROM node:18-alpine

WORKDIR /student-server

COPY package*.json ./

RUN npm install

COPY . .
#// exclude

EXPOSE 3005

CMD ["node", "server.js"]

