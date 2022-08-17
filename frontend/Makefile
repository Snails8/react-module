DC := docker-compose exec front-app
CONTAINER_NAME := front-app
ARG := $1

up:
	docker-compose up -d --build
	make yarn

down:
	docker compose -f docker-compose.yaml -p ${CONTAINER_NAME} down

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
# setup
# =======================================================
yarn:
	docker-compose exec ${CONTAINER_NAME} yarn start

build:
	docker-compose exec ${CONTAINER_NAME} yarn build

install:
	docker-compose exec ${CONTAINER_NAME} yarn
	docker-compose exec ${CONTAINER_NAME} npx create-react-app frontend --template typescript
	cp -R frontend/. ./
	rm -rf frontend
	docker-compose exec ${CONTAINER_NAME} yarn build
	docker-compose exec ${CONTAINER_NAME} yarn start	

api:
	yarn generate:api-client