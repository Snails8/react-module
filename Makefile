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


# ===========================================================
# deploy
# ===========================================================
deploy:
		git pull origin develop
		git checkout main
		git merge develop
		gcloud config set project di-diw-prototype-prd
		gcloud builds submit --region=asia-northeast1