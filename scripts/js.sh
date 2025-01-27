#!/usr/bin/env bash

echo "GENERATING JAVASCRIPT"

JS_PATH=./js
DEF=./proto

# Get the absolute path to the project directory
PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"

# Install dependencies
npm i

# Create JS output directory if it doesn't exist
mkdir -p ${JS_PATH}

# Clean folder for generated data
rm -rf ${JS_PATH}/*

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_JS_PATH="./node_modules/.bin/protoc-gen-js"

# Generate protobuf
protoc \
    --plugin="protoc-gen-js=${PROTOC_GEN_JS_PATH}" \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${JS_PATH}" \
    --ts_out="${JS_PATH}" \
    -I ./${DEF} \
    ./${DEF}/*/*.proto ./${DEF}/*/*/*.proto

echo "JAVASCRIPT DONE"
