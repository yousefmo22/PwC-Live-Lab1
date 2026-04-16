FROM node:18-alpine

WORKDIR /student-web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "start"]

