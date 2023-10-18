"use strict";
//Exercicio 1:
//Crie uma classe "Loja" com propriedades como nome, endereço e uma lista de produtos. 
//Adicione métodos para adicionar e remover produtos da lista e para exibir os produtos disponíveis na loja. 
//Exemplo para remover produtos através de valores em string:
Object.defineProperty(exports, "__esModule", { value: true });
//const remover = rl.question("Insira o nome do produto para remover")
//const index = this.produtos.indexOf(remover)
//this.produtos.splice(index, 1)
var leitor = require("readline-sync");
var Loja_1 = require("./Loja");
var menu = true;
var umaLoja = new Loja_1.Loja();
var outraLoja = new Loja_1.Loja();
console.log(umaLoja.nome);
umaLoja.mudarNome('A minha loja');
outraLoja.mudarNome('A outra loja.......');
console.log(umaLoja.nome);
console.log(outraLoja.nome);
umaLoja.mudarNome('A minha nova loja');
console.log(umaLoja.nome);
//let nome = leitor.questionInt("Insira o nome do produto: ")
var remover;
while (menu) {
    var option = leitor.questionInt("Selecione uma opcao: \n1 - Adiciona Produto: \n2 - Remover Produto: \n3 - Sair: ");
    switch (option) {
        case 1:
            var nome = 'nome';
            console.log(nome);
            break;
        case 2:
            var produto = 'produto';
            console.log(produto);
            break;
    }
}
