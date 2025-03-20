.PHONY: generate build

.DEFAULT_GOAL := generate

VERSION := $(shell git tag | sort -V | tail -n 1 | cut -c2-)

build:
	docker build --build-arg APP_VERSION=$(VERSION) --progress=plain -t proto-gen .

generate: build
	docker run -v $(shell pwd)/proto:/app/proto \
		-v $(shell pwd)/go:/app/go \
	 	-v $(shell pwd)/js:/app/js \
		-v $(shell pwd)/python:/app/python \
		-v $(shell pwd)/java:/app/java \
		-v $(shell pwd)/.git \
		proto-gen
