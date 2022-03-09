# CLI
`knit` has a command line interface that allows you to load inputs and execute templates. All generated code is sent directly to stdout so it can be appended to a file or piped to another tool.

```sh
knit generate \
  --input="./openapi.yml" \
  --loader="openapi3" \
  --template="./template.tmpl" > codegen.go
```