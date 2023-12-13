# Example backend

Small backend to generate a couple test patients. The only available call is a `GET /patients`, which returns 24 patients.

Return format:

```ts
{
  patients: [
        {
            stlFile: "example.stl",
            phone: "+30 58/805 85 18",
            address: "724 Wiegand Stravenue, 2051 Blockport, Gibraltar",
            birthLocation: "Kesslerview, Guyana",
            birthDate: "0064-03-05T12:08:41.144Z",
            gender: "female",
            name: "Shelley Daniel V",
            id: "0",
        }
  ]
}
```

## Installation

```
yarn install
```

## Run development mode

```
yarn start
```

## Linting

The rules are in `.eslintrc.js` and in `.prettierrc.js`

To run the linter:
```
yarn lint
```

To run the linter and fix the autofixable errors:
```
yarn lint-fix
```