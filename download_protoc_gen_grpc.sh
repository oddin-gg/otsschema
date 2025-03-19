#!/usr/bin/env bash

os_type=`uname -s`
cpu_arch=`uname -m`
if [[ "$os_type" == "Linux" ]] && [[ "$cpu_arch" == "x86_64" ]]; then
  echo "loading protoc-gen-grpc-java for Linux amd64"
  wget https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/1.54.1/protoc-gen-grpc-java-1.54.1-linux-x86_64.exe
  mv protoc-gen-grpc-java-1.54.1-linux-x86_64.exe protoc-gen-grpc-java

elif [[ "$os_type" == "Linux" ]] && [[ "$cpu_arch" == "aarch64" ]]; then
  echo "loading protoc-gen-grpc-java for Linux amd64"
  wget https://repo1.maven.org/maven2/io/grpc/protoc-gen-grpc-java/1.54.1/protoc-gen-grpc-java-1.54.1-linux-aarch_64.exe
  mv protoc-gen-grpc-java-1.54.1-linux-aarch_64.exe protoc-gen-grpc-java

else
  echo "ERROR unknown OS type [$os_type] or cpu architecture [$cpu_arch]"
  exit 1
fi

echo "protoc-gen-grpc-java loaded successfully."
exit 0
