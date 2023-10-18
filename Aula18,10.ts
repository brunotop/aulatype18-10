//Exercicio 1:
//Crie uma classe "Loja" com propriedades como nome, endereço e uma lista de produtos. 
//Adicione métodos para adicionar e remover produtos da lista e para exibir os produtos disponíveis na loja. 
//Exemplo para remover produtos através de valores em string:

//const remover = rl.question("Insira o nome do produto para remover")
//const index = this.produtos.indexOf(remover)
//this.produtos.splice(index, 1)

import * as leitor from "readline-sync"
import { Loja } from "./Loja";
let menu = true
let umaLoja:Loja = new Loja();
let outraLoja:Loja = new Loja();


console.log(umaLoja.nome);

umaLoja.mudarNome('A minha loja');
outraLoja.mudarNome('A outra loja.......')

console.log(umaLoja.nome);
console.log(outraLoja.nome);

umaLoja.mudarNome('A minha nova loja');
console.log(umaLoja.nome);

//let nome = leitor.questionInt("Insira o nome do produto: ")

let remover: String; 
while (menu) {
    let option = leitor.questionInt("Selecione uma opcao: \n1 - Adiciona Produto: \n2 - Remover Produto: \n3 - Sair: ");    
    switch (option) {
        case 1:
           let nome = 'nome'
           console.log(nome);
           break;
        case 2:
            let produto = 'produto'
            console.log(produto)
            break
    }  
}
