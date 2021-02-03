#!/usr/bin/env bash

echo "GENERATING JAVA"

rm -rf ./java/src/*

protoc ./proto/ots/*.proto ./proto/ots/*/*.proto -I ./proto --plugin=protoc-gen-grpc-java=./protoc-gen-grpc-java --grpc-java_out=./java/src --java_out=./java/src

cd ./java &&
./gradlew clean jar &&
cd .. &&
cp ./java/build/libs/ots_schema.jar ./java

echo "JAVA DONE"
