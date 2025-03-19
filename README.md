# OTS Schema
Represents [gRPC](https://grpc.io/) schema for Oddin.gg OTS (Oddin Ticketing System).

### Prerequisites

Ensure you have Docker installed

### How to generate Grpc files
- **For x86 architecture**
    - run command
       ```
       make generate
       ```

- **For Apple silicon**
    - go to the java/build.gradle file and uncomment line where "!!! Important:" is written and comment line above.
    - run command
      ```
      make generate
      ```
