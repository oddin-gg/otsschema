# OTSSchema GO connector example

### Download dependencies

```
go mod vendor
```

### How to run
- copy `config.yaml.example` `config.yaml` then edit url and token
- build it: `go build -mod vendor .`
- run it: `./goconnector -config config.yaml`
  - The `-config` flag defaults to `./config.yaml`, so it can be omitted when the file sits next to the binary. 
