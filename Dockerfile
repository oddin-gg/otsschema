# Start with a Go base image
FROM golang:1.24

ARG PROTOC_GEN_GO_VERSION="v1.27.1"
ARG PROTOC_GEN_GO_GRPC_VERSION="v1.0.0"
ARG PROTOC_GEN_GO_VTPROTO_VERSION="79df5c4"
ARG NPM_VERSION="11"
ARG OPEN_JDK_VERSION="17"
ARG NODE_JS_VERSION="20"

# Install Python, Node.js and Java
RUN apt-get update && \
    apt-get install -y gnupg protobuf-compiler python3 python3-pip python3-venv openjdk-${OPEN_JDK_VERSION}-jdk && \
    curl -fsSL https://deb.nodesource.com/setup_${NODE_JS_VERSION}.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@${NPM_VERSION}

# Install Go protobuf plugins
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@${PROTOC_GEN_GO_VERSION} && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@${PROTOC_GEN_GO_GRPC_VERSION} && \
    go install github.com/planetscale/vtprotobuf/cmd/protoc-gen-go-vtproto@${PROTOC_GEN_GO_VTPROTO_VERSION}

# Find and set JAVA_HOME
RUN update-alternatives --query java | grep 'Value: ' | grep -o '/.*$' | sed 's/\/bin\/java//' > /tmp/java_home && \
    export JAVA_HOME=$(cat /tmp/java_home) && \
    echo "export JAVA_HOME=$JAVA_HOME" >> /etc/profile.d/java_home.sh

# Verify Java installation
RUN java -version && \
    echo $JAVA_HOME

WORKDIR /app

COPY package.json package-lock.json requirements.txt ./
COPY java/ /app/java/

RUN npm install

# Create Python virtual environment
RUN python3 -m venv /app/venv
ENV VIRTUAL_ENV=/app/venv
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

# Install Python dependencies
RUN pip install -r requirements.txt

# Add node_modules/.bin to PATH
ENV PATH="/app/node_modules/.bin:${PATH}"

# Create directories for generated files
RUN mkdir -p go js python java

# Copy all scripts to a scripts directory
COPY scripts/ /app/scripts/

# Install protoc-gen-grpc-java
COPY download_protoc_gen_grpc.sh /app/
RUN chmod +x /app/download_protoc_gen_grpc.sh
RUN ./download_protoc_gen_grpc.sh
RUN chmod +x /app/protoc-gen-grpc-java

COPY generate.sh /app/

# Copy Java project files
COPY java/ /app/java/

# Make all scripts executable
RUN chmod +x /app/scripts/*.sh
RUN chmod +x /app/java/gradlew

# Make the script executable
RUN chmod +x generate.sh

# Copy proto files
COPY proto/ ./proto/

ENTRYPOINT ["/app/generate.sh"]
