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
