# prisma-nestjs-graphql

Generate object types, inputs, args, etc. from prisma schema file for usage with @nestjs/graphql module.

## Features

-   Generates only necessary imports
-   Combines zoo of nested/nullable filters
-   Updates source code of existing files
-   Do not generate resolvers, since it's application specific

## Install

```sh
npm install --save-dev prisma-nestjs-graphql
```

## Usage

1. Add new generator section to `schema.prisma` file

```prisma
generator nestgraphql {
    provider = "node node_modules/prisma-nestjs-graphql"
    output = "../src"
}
```

2. Run prisma generate

```sh
npx prisma generate
```

## Generator options

-   `output` Output folder relative to this schema file
-   `outputFilePattern` File pattern (default: `{feature}/{dasherizedName}.{type}.ts`)  
    Possible tokens:
    -   `{feature}` - model name in dashed case or 'prisma' if unknown
    -   `{name}` - name of model/input/arg
    -   `{dasherizedName}` - dashed-case name of model/input/arg without suffix
    -   `{type}` - short type name (model, input, args, output)
-   `combineScalarFilters` - Combine nested/nullable scalar filters to single
    (default: `true`)
-   `atomicNumberOperations` - Atomic number operations,
    `false` - disabled (default), `true` - enabled

## Resources

-   Todo - https://github.com/unlight/prisma-nestjs-graphql/issues/2
-   https://ts-ast-viewer.com/
-   https://github.com/unlight/nestjs-graphql-prisma-realworld-example-app
-   https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-schema/data-model
-   JSON type for the code first approach - https://github.com/nestjs/graphql/issues/111#issuecomment-631452899
-   https://github.com/paljs/prisma-tools/tree/master/packages/plugins
