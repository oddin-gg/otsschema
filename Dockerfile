ARG PROTOBUF_COMPILER_VERSION="3.21.12-*"

# ==========================================
# 1. STAGE: GO GENERATOR
# ==========================================
FROM golang:1.24 AS go-gen

ARG PROTOBUF_COMPILER_VERSION
ARG PROTOC_GEN_GO_VERSION="v1.27.1"
ARG PROTOC_GEN_GO_GRPC_VERSION="v1.0.0"
ARG PROTOC_GEN_GO_VTPROTO_VERSION="79df5c4"

RUN apt-get update && apt-get install -y protobuf-compiler=${PROTOBUF_COMPILER_VERSION}

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@${PROTOC_GEN_GO_VERSION} && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@${PROTOC_GEN_GO_GRPC_VERSION} && \
    go install github.com/planetscale/vtprotobuf/cmd/protoc-gen-go-vtproto@${PROTOC_GEN_GO_VTPROTO_VERSION}

WORKDIR /app

COPY scripts/go.sh /app/scripts/
COPY proto/ ./proto/

RUN mkdir /app/go && \
    chmod +x /app/scripts/go.sh && \
    /app/scripts/go.sh

# ==========================================
# 2. STAGE: JS/NODE GENERATOR
# ==========================================
FROM node:20-bookworm AS js-gen

ARG PROTOBUF_COMPILER_VERSION
ARG GRPC_TOOLS_NODE_PROTOC_TS_VERSION="1.13.1"

RUN apt-get update && apt-get install -y protobuf-compiler=${PROTOBUF_COMPILER_VERSION}

ENV PROTO_DIR=/app/proto
ENV OUT_DIR=/app/js

WORKDIR /app

COPY scripts/js.sh /app/scripts/
COPY package.json package-lock.json ./
COPY proto/ ./proto/

RUN npm install -g grpc-tools@${GRPC_TOOLS_NODE_PROTOC_TS_VERSION} && \
    npm install && \
    mkdir /app/js && \
    chmod +x /app/scripts/js.sh && \
    /app/scripts/js.sh

## ==========================================
## 3. STAGE: PYTHON GENERATOR
## ==========================================
FROM python:3.12-bookworm AS python-gen

ARG PROTOBUF_COMPILER_VERSION

RUN apt-get update && apt-get install -y protobuf-compiler=${PROTOBUF_COMPILER_VERSION}

WORKDIR /app

COPY scripts/python.sh /app/scripts/
COPY requirements.txt .
COPY proto/ ./proto/

RUN pip install --no-cache-dir -r requirements.txt && \
    mkdir /app/python && \
    chmod +x /app/scripts/python.sh && \
    /app/scripts/python.sh

# ==========================================
# 4. STAGE: JAVA GENERATOR
# ==========================================
FROM eclipse-temurin:17-jdk AS java-gen

ARG PROTOBUF_COMPILER_VERSION

RUN apt-get update && apt-get install -y protobuf-compiler=${PROTOBUF_COMPILER_VERSION}

WORKDIR /app

COPY download_protoc_gen_grpc.sh /app/
COPY scripts/java.sh /app/scripts/
COPY java/ /app/java/
COPY proto/ ./proto/

RUN chmod +x /app/download_protoc_gen_grpc.sh && \
    chmod +x /app/scripts/java.sh && \
    chmod +x /app/java/gradlew && \
    /app/download_protoc_gen_grpc.sh && \
    chmod +x /app/protoc-gen-grpc-java && \
    /app/scripts/java.sh


# ==========================================
# 5. STAGE: ARTIFACT EXPORTER
# ==========================================
FROM scratch AS export-stage

COPY --from=go-gen /app/go /go
COPY --from=js-gen /app/js /js
COPY --from=python-gen /app/python /python
COPY --from=java-gen /app/java/src/main/java/ /java/src/main/java/
