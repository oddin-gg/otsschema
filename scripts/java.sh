#!/usr/bin/env bash

echo "GENERATING JAVA"

rm -rf ./java/*

protoc ./proto/ots/*.proto ./proto/ots/*/*.proto -I ./proto --plugin=protoc-gen-grpc-java=./protoc-gen-grpc-java --grpc-java_out=./java --java_out=./java

echo "JAVA DONE"