include .env

DC := docker-compose exec next-app
CONTAINER_NAME := next-app
ARG := $1

# =======================================================
# docker cmd
# =======================================================
up:
	docker-compose -p ${COMPOSE_PROJECT_NAME} up

build:
	docker-compose -p ${COMPOSE_PROJECT_NAME} up --build

down:
	docker-compose -p ${COMPOSE_PROJECT_NAME} down

destroy:
	docker-compose -p ${COMPOSE_PROJECT_NAME} down --rmi all --volumes

ps:
	docker-compose ps

exec-container:
	docker-compose -p ${COMPOSE_PROJECT_NAME} exec ${SERVICE_NAME_APP} /bin/ash

system-prune: # remove unused docker obj
	docker system prune

image-prune: # remove unused docker imgae
	docker image prune

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
	docker-compose exec ${CONTAINER_NAME} yarn add ${ARG}

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