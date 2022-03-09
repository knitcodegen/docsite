# Embedding
With `knit` you can embed code generators directly in your code files. This is a great option if your system needs supplemental components generated from a part of your schema. 

## Annotations
Embedding `knit` code generators starts with annotations. Annotations are used to identify code generator options and the output location of the generated code. 

| Annotation               | Purpose                |
|--------------------------|------------------------|
| `@knit <option> <value>` | Options                |
| `@+knit`                 | Generated Code / Begin |
| `@!knit`                 | Generated Code / End   |

It takes a combination of both option annotations and begin/end annotations to successfully use knit to insert generated code into a file.

`knit` is capable of inserting generated code into any file, no matter the language or type, as long as that file supports comments where the options can be defined.

Here's an example of annotations in action:

example.ts:
```ts
/*
  @knit input ./sizes.yml
  @knit template tmpl`
    enum Sizes {
    {{ range $k, $v := .Sizes }} 
      {{ $k }} = "$v",
    {{ end }}
    }
  ` 
*/
// @+knit
// @!knit
```
Running `knit example.ts` produces the following:
```ts
/*
  @knit input ./sizes.yml
  @knit template tmpl`
    enum Sizes {
    {{ range $k, $v := .Sizes }} 
      {{ $k }} = "$v",
    {{ end }}
    }
  ` 
*/
// @+knit
enum Sizes {
    Small = "small",
    Medium = "medium",
    Large = "large",
}
// @!knit
```

## Option Annotations
Options are defined on the opening annotations in the following format:
```
@knit <option> <value>
```

All annotated options support environment variable expansion. All `$env` variables starting with `$` will be expanded before the option line is parsed. 
```
@knit input $OPENAPI_SPEC
```


## Codegen Annotations
The location in which the generated code is inserted into a code file is dictated by the open/close knit annotations:

```
// @+knit
  < code is generated here >
// @!knit
```