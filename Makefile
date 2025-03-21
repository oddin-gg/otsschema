.PHONY: generate build

.DEFAULT_GOAL := generate

VERSION := $(shell git tag | sort -V | tail -n 1 | cut -c2-)

ifeq ($(shell uname -s),Darwin)
    ifeq ($(shell uname -m),arm64)
        ARCHITECTURE := :osx-x86_64e
    endif

build:
	docker build \
		--build-arg APP_VERSION=$(VERSION) \
		--build-arg ARCHITECTURE=$(ARCHITECTURE) \
		-t proto-gen .

generate: build
	docker run -v $(shell pwd)/proto:/app/proto \
		-v $(shell pwd)/go:/app/go \
	 	-v $(shell pwd)/js:/app/js \
		-v $(shell pwd)/python:/app/python \
		-v $(shell pwd)/java:/app/java \
		proto-gen
