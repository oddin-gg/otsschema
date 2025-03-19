#!/usr/bin/env bash

echo "GENERATING JAVA"

rm -rf ./java/src/main/java/*

protoc ./proto/ots/*.proto ./proto/ots/*/*.proto -I ./proto --plugin=protoc-gen-grpc-java=./protoc-gen-grpc-java --grpc-java_out=./java/src/main/java --java_out=./java/src/main/java

cd ./java &&
./gradlew clean jar &&
cd .. &&
cp ./java/build/libs/ots.jar ./java/ots_schema.jar

echo "JAVA DONE"
