build:
	sudo chown -R ${USER} ${PWD}
	docker-compose build
up:
	docker-compose up -d
	sudo chmod 777 -R frontend/node_modules
down:
	docker-compose down
clear-database:
	docker-compose down
	sudo rm -R database/postgres-data
	docker-compose up -d