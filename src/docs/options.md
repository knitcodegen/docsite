# Options
Whether you are using `knit` from the command line or embedded in a file, the behaviour of a code generator is defined using a series of key-value option pairs. 

## `input`
The `input` option specifies an input file or literal. This option is _required_ for all generators.

### File
An `input` can be defined as a path to a file. The two default input file types are `json` and `yaml`. 

Relative paths to files are resolved using the directory in which `knit` has been executed.

Currently remote file loading is not available but is planned for a future release. Please follow [#5](https://github.com/knitcodegen/knit/issues/5) for details and updates.

### Literal
An `input` can also be defined as a literal. A literal is a multiline string surrounded by backticks prefixed by the extension of the file the text would otherwise reside in.
```text
yaml`
schema:
  paths:
    /dogs:
      post:
        summary: "Creates a \`dog\`"
        operationId: CreateDog
`
```
Literals will be fed to their respective loader "literally", so be weary of spacing and formatting for input types like `yaml`.

Backtick characters in literals can be escaped using a prefixed backslash.

## `loader`
The `loader` option specifies the loader used to load the input file.

These are the available loader types:
- `yml` / `yaml`
- `json`
- `openapi3`

These are the planned loader types:
- `protobuf` (follow [#1](https://github.com/knitcodegen/knit/issues/1))
- `graphql` (follow [#2](https://github.com/knitcodegen/knit/issues/2))

Sometimes the loader type can be inferred from the input file type but it is important to understand when to be explicit.

As an example, technically an openapi specification could be loaded by the `yaml` loader, however, more specialized loaders like `openapi3` know how to resolve file references and validate schema adherence.

## `template`
The `template` option specifies a template file or literal. This option is _required_ for all generators.

Currently the only supported template engines are the ones native to Go:
- `text/template` 
- `html/template`

### File

### Literal
A `template` can also be defined as a literal. A literal is a multiline string surrounded by backticks prefixed by the extension of the file the text would otherwise reside in.
```
tmpl`
  type Generated struct {
    {{ range $k, $v := .Map }} 
      {{ $k }} string \`json:"{{ $v }}"\`
    {{end}}
  }
`
```

Backtick characters in literals can be escaped using a prefixed backslash.
