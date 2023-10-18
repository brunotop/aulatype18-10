export class Loja{
    nome: String;
    endereco: String;
    listadeprodutos: Array<String>;

    constructor() {
        this.nome = 'Sem nome';
        this.endereco ='Rua dos bobos, 0';
        this.listadeprodutos = [];
    }

    remover() {
        this.listadeprodutos.splice
    }

    adicionar(produto:String) {
        this.listadeprodutos.push(produto);
    }   

    mudarNome(novoNome:String) {
        this.nome = novoNome;
    }
}

/*
const remover = leitor.question("Insira o nome do produto para remover")
const index = this.produtos.indexOf(remover)

let produtos: String = this.produtos.splice(index, 1)
let adicionar: String = this.adiciona = 'adiciona';
let remove: String = this.remover = 'remover';
*/