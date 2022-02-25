#!/usr/bin/env bash

echo "GENERATING GO"

rm -rf ./go/*

# check that protoc is installed
GO_PROTOC_GEN=$(go env GOPATH)/bin/protoc-gen-go
if [[ ! -x ${GO_PROTOC_GEN} ]]; then
  echo -e "ERROR: Can not find ${GO_PROTOC_GEN}"
  echo -e "\tuse: \`go install google.golang.org/protobuf/cmd/protoc-gen-go@latest\`"
  echo -e "\tuse: \`go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest\`"
  echo -e "\tuse: \`go get -u google.golang.org/protobuf\`"
  exit 1
fi

protoc ./proto/ots/*.proto -I ./proto --go_out=./go --go-grpc_out=./go
protoc ./proto/ots/enum/*.proto -I ./proto --go_out=./go --go-grpc_out=./go

echo "GO DONE"
