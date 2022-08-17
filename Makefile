# ====================================================================
# docker command
# ====================================================================
up:
	cd ../frontend && \
	make up 

down:
	cd ../frontend && \
	make down

# ====================================================================
# setup
# ====================================================================
setup:
	cd ../frontend && \
	make install
	echo "########################################################"
	echo "                     Enjoy React Life                      "
	echo "######################## finish ########################"

