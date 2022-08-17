# ====================================================================
# docker command
# ====================================================================
up:
	cd backend && \
	make up && \
	cd ../frontend && \
	make up 

down:
	cd backend && \
	make down && \ 
	cd ../frontend && \
	make down

restart:
	cd backend && \
	make restart

destroy:
	cd backend && \
	make destroy

log:
	docker logs -f go-app_app_1
# ====================================================================
# genapi
# ====================================================================

# ====================================================================
# setup
# ====================================================================
setup:
	cd backend && \
	make install && \
	cd ../frontend && \
	make install
	make yarn
	echo "########################################################"
	echo "                     Enjoy Go Life                      "
	echo "######################## finish ########################"

