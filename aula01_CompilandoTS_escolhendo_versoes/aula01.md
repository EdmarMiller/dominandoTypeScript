# Compilando o TypeScript para Versões Diferentes do EcmaScript

Por padrão o TS é compilado no ES3 

> Comando para compilar o código de TS ==> JS

```bash

tsc aula01.ts

```
>Compilado defaut ES3 (só para navegadores bem antigos, não recomendado)

```javascript
  console.log("Hello World! Este é meu primeiro código TypeScript");
  console.log("=================");
  var nome = "João";
  console.log("Olá " + nome + ". Seja bem-vindo!");
  console.log("=================");
  var Produto = /** @class */ (function () {
      function Produto(produtoNome, produtoValor) {
          this.nome = produtoNome;
          this.valor = produtoValor;
      }
      return Produto;
  }());
  var playstation5 = new Produto("Playstation 5", 5000);
  console.log("=================");
  var elemento = document.querySelector('div');
  ```
  >Compilado defaut ES2015

  ```javascript
  console.log("Hello World! Este é meu primeiro código TypeScript");
  console.log("=================");
  const nome = "João";
  console.log("Olá " + nome + ". Seja bem-vindo!");
  console.log("=================");
  class Produto {
      constructor(produtoNome, produtoValor) {
          this.nome = produtoNome;
          this.valor = produtoValor;
      }
  }
  const playstation5 = new Produto("Playstation 5", 5000);
  console.log("=================");
  const elemento = document.querySelector('div');
```
Recomendado Compilar pra versões mais novas, ECMA2015 pra frente.
> Mudando o Compilador via terminal. Podemos passa flags, alguns exemplos abaixo:

Saber quais flags de um programa, todas opções que um programa nos fornece.

```bash

tsc aula01.ts --help
// Parte do que será impresso

-t VERSION, --target VERSION Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. 


```
> Para compilar em uma vesão especifica usamos a flag target (alvo)
```bash

tsc aula01.ts --target "ES5"
tsc aula01.ts --target "ES2015"
tsc aula01.ts --target "ESNEXT"

```
Esse ultimo comando para pegar a ultima versão

# tsconfig.json

Para facilitar a configuração o TS tem um arquivo chamado tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2015"
  }
}

```

Para pegarmos a configuração executamos  tsc, na pasta raiz, onde encontra-se o tsconfig.json

```bash
tsc

```