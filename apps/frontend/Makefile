include .env

# CONTAINER_NAME := front-app
ARG := $1
# =======================================================
# docker-compose cmd
# =======================================================
up:
	docker-compose -p ${COMPOSE_PROJECT_NAME} up

build:
	docker-compose -p ${COMPOSE_PROJECT_NAME} build --no-cache

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
# =======================================================
# yarn cmd
# =======================================================
yarn-install:
	docker-compose -p ${COMPOSE_PROJECT_NAME} exec ${SERVICE_NAME_APP} yarn install

yarn-start:
	docker-compose -p ${COMPOSE_PROJECT_NAME} exec ${SERVICE_NAME_APP} yarn start

yarn-build:
	docker-compose -p ${COMPOSE_PROJECT_NAME} exec ${SERVICE_NAME_APP} yarn build

add:
	docker-compose -p ${COMPOSE_PROJECT_NAME} exec ${SERVICE_NAME_APP} yarn add ${ARG}

build-storybook:
	docker-compose exec ${CONTAINER_NAME} yarn build-storybook

storybook:
	docker-compose exec ${CONTAINER_NAME} yarn storybook

test:
	docker-compose -p ${COMPOSE_PROJECT_NAME} exec ${SERVICE_NAME_APP} yarn test

genapi:
	docker run --rm -v "${CURDIR}/../:/local" openapitools/openapi-generator-cli:v5.1.1 generate \
	-i /local/openapi/v1.yaml \
	-g typescript-fetch \
	-o /local/frontend/src/api-client \
	--additional-properties=typescriptThreePlus=true
# =======================================================
# setup
# =======================================================
install-react-app:
	docker-compose exec ${CONTAINER_NAME} yarn
	docker-compose exec ${CONTAINER_NAME} npx create-react-app frontend --template typescript
	cp -R frontend/. ./
	rm -rf frontend
	docker-compose exec ${CONTAINER_NAME} yarn build
	docker-compose exec ${CONTAINER_NAME} yarn start	

install:
	cp .env.local.sample .env.local
	cp .env.sample .env
	docker-compose up -d --build
	docker-compose exec ${CONTAINER_NAME} yarn
	docker-compose exec ${CONTAINER_NAME} yarn build
	docker-compose exec ${CONTAINER_NAME} yarn start	