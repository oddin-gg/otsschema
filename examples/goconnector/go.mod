module goconnector

go 1.23

require (
	github.com/google/uuid v1.6.0
	github.com/kelseyhightower/envconfig v1.4.0
	github.com/oddin-gg/otsschema v0.24.1-0.20240610145304-27456e09d987
	google.golang.org/grpc v1.67.0
	google.golang.org/protobuf v1.34.2
)

replace github.com/oddin-gg/otsschema => ../..

require (
	github.com/golang/protobuf v1.5.4 // indirect
	golang.org/x/net v0.28.0 // indirect
	golang.org/x/sys v0.24.0 // indirect
	golang.org/x/text v0.17.0 // indirect
	google.golang.org/genproto v0.0.0-20220829175752-36a9c930ecbf // indirect
)
