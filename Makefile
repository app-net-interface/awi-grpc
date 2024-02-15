AWI_UI_PATH=../awi-ui

.PHONY: all
all: generate mocks

.PHONY: generate
generate:
	rm -rf pb/* js/* ts/*
	protoc --proto_path=proto \
	 \
 	 --go_out=pb/ --go_opt=paths=source_relative --golang-deepcopy_out=:pb/ \
	 --go-grpc_out=pb/ --go-grpc_opt=paths=source_relative \
	 \
	 --plugin="node_modules/.bin/protoc-gen-ts_proto" --ts_proto_out=ts \
	 --ts_proto_opt=env=browser,outputServices=nice-grpc,outputServices=generic-definitions,outputJsonMethods=false,useExactTypes=false,esModuleInterop=true \
	 \
	 --js_out=import_style=commonjs:js --grpc-web_out=import_style=commonjs,mode=grpcwebtext:js \
	 proto/*.proto
	@echo "Copying generated files to awi-ui directory..."
	rm -rf ${AWI_UI_PATH}/src/_proto/grpc-service/ts/*
	cp -r ts/* ${AWI_UI_PATH}/src/_proto/grpc-service/ts/

.PHONY: tools
tools:
	go install istio.io/tools/cmd/protoc-gen-golang-deepcopy@latest
	go install github.com/vektra/mockery/v2@v2.32.0
	npm install
	@echo "\033[1;33m\nInstall protoc-gen-grpc-web based on instructions from https://github.com/grpc/grpc-web#code-generator-plugin"

.PHONY: mocks
mocks:
	rm -rf mocks/*
	mockery --with-expecter --all
