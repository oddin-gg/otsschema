#!/usr/bin/env bash

echo "GENERATING GO"

rm -rf ./go/*

protoc ./proto/ots/*.proto ./proto/ots/*/*.proto -I ./proto --go_out=plugins=grpc:./go

echo "GO DONE"
