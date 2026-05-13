module goconnector

go 1.25.0

require (
	github.com/go-viper/mapstructure/v2 v2.5.0
	github.com/google/uuid v1.6.0
	github.com/oddin-gg/otsschema v0.24.1-0.20240610145304-27456e09d987
	github.com/spf13/pflag v1.0.10
	github.com/spf13/viper v1.21.0
	google.golang.org/grpc v1.81.0
	google.golang.org/protobuf v1.36.11
)

replace github.com/oddin-gg/otsschema => ../..

require (
	github.com/fsnotify/fsnotify v1.9.0 // indirect
	github.com/pelletier/go-toml/v2 v2.2.4 // indirect
	github.com/sagikazarmark/locafero v0.11.0 // indirect
	github.com/sourcegraph/conc v0.3.1-0.20240121214520-5f936abd7ae8 // indirect
	github.com/spf13/afero v1.15.0 // indirect
	github.com/spf13/cast v1.10.0 // indirect
	github.com/subosito/gotenv v1.6.0 // indirect
	go.yaml.in/yaml/v3 v3.0.4 // indirect
	golang.org/x/net v0.51.0 // indirect
	golang.org/x/sys v0.42.0 // indirect
	golang.org/x/text v0.34.0 // indirect
	google.golang.org/genproto v0.0.0-20220829175752-36a9c930ecbf // indirect
)
