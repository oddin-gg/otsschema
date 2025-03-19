.PHONY: generate
generate:
	docker build -t proto-gen .
	docker run -v $(shell pwd)/proto:/app/proto -v $(shell pwd)/go:/app/go -v $(shell pwd)/js:/app/js -v $(shell pwd)/python:/app/python -v $(shell pwd)/java:/app/java proto-gen
