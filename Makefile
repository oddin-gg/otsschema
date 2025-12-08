.PHONY: generate clear

.DEFAULT_GOAL := generate

generate: clear
	DOCKER_BUILDKIT=1 docker build \
	  --target export-stage \
	  --output type=local,dest=. \
	  .

clear:
	rm -rf go/* && \
	rm -rf java/src/main/java/* && \
	rm -rf js/* && \
	rm -rf python/*
