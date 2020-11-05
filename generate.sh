#!/usr/bin/env bash

#protoc ./proto/ots/*.proto /proto/ots/*/*.proto --jsonschema_out=./json -I ./proto

# GO
./scripts/go.sh

# JS
./scripts/js.sh

# PYTHON
./scripts/python.sh

# JAVA
./scripts/java.sh