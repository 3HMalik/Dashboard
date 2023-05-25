FROM node:14

WORKDIR /src/app

COPY package*.json /src/app/

COPY package*.json /usr/src/app/

COPY . /usr/src/app/
COPY . /src/app/
EXPOSE 5000

CMD ["node", "app.js"]