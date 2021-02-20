## Passos para a criação da aplicação

Primeiro, criamos uma aplicação Next.js com o comando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Adicionamos o typescript
yarn add typescript @types/react @types/node -D

### Nessa fase deletamos todos os arquivos que não serão utilizados e modificamos os arquivos _app.js e index.js para typescript adicionando o sufixo tsx

## Eslint
yarn add eslint -D

## Prettier
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D

## Iniciamos o eslint para gerar o arquivo de configurações
yarn eslint --init

### Copiamos o código para a pasta .eslintrc.json:

```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/standard",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}
```
## Instalando o styled-components

yarn add styled-components

## Instalando suas tipagens

yarn add @types/styled-components -D

## Instalando plugin Babel

yarn add babel-plugin-styled-components --dev

## Adicionando Redux

yarn add redux

## Adicionando Redux-saga

yarn add redux-saga

## Adicionando jest para testes

yarn add jest
