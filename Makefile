.PHONY: generate

.DEFAULT_GOAL := generate

generate: clear
	DOCKER_BUILDKIT=1 docker build \
	  --progress=plain \
	  --target export-stage \
	  --output type=local,dest=. \
	  .


clear:
	rm -rf go/* && \
	rm -rf java/src/main/java/* && \
	rm -rf js/* && \
	rm -rf python/*