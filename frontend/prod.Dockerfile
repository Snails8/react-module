FROM node:16.18.0-alpine

RUN apk update && \
    apk add git make g++ && \
    apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

ENV TZ Asia/Tokyo
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH

COPY ./ /app
WORKDIR /app

RUN yarn install
RUN yarn build