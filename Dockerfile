FROM node:16-alpine3.14

RUN mkdir p5js_practice

COPY . /p5js_practice

WORKDIR /p5js_practice

EXPOSE 3000

CMD npm install
