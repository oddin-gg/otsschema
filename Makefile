.PHONY: generate build

.DEFAULT_GOAL := generate

build:
	docker build -t proto-gen .

generate: build
	docker run -v $(shell pwd)/proto:/app/proto \
		-v $(shell pwd)/go:/app/go \
	 	-v $(shell pwd)/js:/app/js \
		-v $(shell pwd)/python:/app/python \
		-v $(shell pwd)/java:/app/java \
		proto-gen
