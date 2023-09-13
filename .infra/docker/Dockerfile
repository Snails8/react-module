FROM node:18.0.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# アプリケーションの起動コマンドを設定
CMD ["yarn", "start"]