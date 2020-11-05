#!/usr/bin/env bash

echo "GENERATING JAVASCRIPT"

JS_PATH=./js
DEF=./proto

# Install dependencies
npm i

# Clean folder for generated data
rm -rf ${JS_PATH}/*

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Generate protobuf
protoc -I ./${DEF} \
    --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_PATH}" \
    --grpc_out=${JS_PATH} \
    --ts_out="${JS_PATH}" \
    ./${DEF}/*/*.proto ./${DEF}/*/*/*.proto

echo "JAVASCRIPT DONE"
