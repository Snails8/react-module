DC := docker-compose exec front-app
ARG := $1

up:
	docker-compose up -d --build
	make yarn

#create-project:
#	docker-compose up -d --build
#	docker-compose exec app composer create-project --prefer-dist laravel/laravel .
#	docker-compose exec app composer require predis/predis

install:
	docker-compose exec front-app yarn dev
	
reinstall:
	@make destroy
	@make install

stop:
	docker-compose stop

restart:
	docker-compose down
	docker-compose up -d

down:
	docker-compose down

destroy:
	docker-compose down --rmi all --volumes

ps:
	docker-compose ps

front-app:
	docker-compose exec front-app /bin/ash

yarn:
	docker-compose exec front-app yarn dev