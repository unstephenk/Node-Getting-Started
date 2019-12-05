FROM node:latest

COPY . ./code

WORKDIR /code

RUN npm install

EXPOSE 4000
ENTRYPOINT ["node","index.js"]
