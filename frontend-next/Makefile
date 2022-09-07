DC := docker-compose exec next-app
CONTAINER_NAME := next-app
ARG := $1

# =======================================================
# docker cmd
# =======================================================
up:
	docker-compose up -d --build
	make yarn

down:
	docker compose down

stop:
	docker-compose stop

restart:
	docker-compose down
	docker-compose up -d


destroy:
	docker-compose down --rmi all --volumes

ps:
	docker-compose ps

front-app:
	docker-compose exec ${CONTAINER_NAME} /bin/ash

# =======================================================
# yarn cmd
# =======================================================
yarn:
	docker-compose exec ${CONTAINER_NAME} yarn start

build:
	docker-compose exec ${CONTAINER_NAME} yarn build

add:
	docker-compose exec ${CONTAINER_NAME} yarn install ${ARG}

storybook:
	docker-compose exec ${CONTAINER_NAME} yarn storybook
# =======================================================
# setup
# =======================================================
install-react-app:
	docker-compose exec ${CONTAINER_NAME} yarn
	docker-compose exec ${CONTAINER_NAME} npx create-next-app@latest frontend-next --ts
	cp -R frontend-next/. ./
	rm -rf frontend-next
	docker-compose exec ${CONTAINER_NAME} yarn build
	docker-compose exec ${CONTAINER_NAME} yarn start	

api:
	yarn generate:api-client

install:
	docker-compose up -d --build
	docker-compose exec ${CONTAINER_NAME} yarn
	docker-compose exec ${CONTAINER_NAME} yarn build
	docker-compose exec ${CONTAINER_NAME} yarn start	