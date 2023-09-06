include .env

# CONTAINER_NAME := front-app
ARG := $1
# =======================================================
# docker-compose cmd
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

# =======================================================
# yarn cmd
# =======================================================
module-build:
	yarn workspace @module/ui-component build

module-install:
	yarn workspace @module/ui-component install

frontend-start:
	yarn workspace frontend start