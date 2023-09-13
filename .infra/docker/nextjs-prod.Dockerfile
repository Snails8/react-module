FROM node:18.0.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY . .

# run production build
RUN yarn next build

EXPOSE 3000

CMD ["yarn", "start"]