FROM openjdk:11 as builder
COPY . /home/app
WORKDIR /home/app

RUN apt install -y curl \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt install -y nodejs g++ gcc make python \
    && curl -L https://www.npmjs.com/install.sh | sh \
    && npm install \
    && npm run test || exit 1 \
    && npm run build

FROM node:10-alpine
COPY --from=builder /home/app/package*.json /home/app/
COPY --from=builder /home/app/dist/ /home/app/dist/
WORKDIR /home/app
RUN npm install --production
ENTRYPOINT node dist/main.js
EXPOSE 80