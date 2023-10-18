"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var Loja = /** @class */ (function () {
    function Loja() {
        this.nome = 'Sem nome';
        this.endereco = 'Rua dos bobos, 0';
        this.listadeprodutos = [];
    }
    Loja.prototype.remover = function () {
        this.listadeprodutos.splice;
    };
    Loja.prototype.adicionar = function (produto) {
        this.listadeprodutos.push(produto);
    };
    Loja.prototype.mudarNome = function (novoNome) {
        this.nome = novoNome;
    };
    return Loja;
}());
exports.Loja = Loja;
/*
const remover = leitor.question("Insira o nome do produto para remover")
const index = this.produtos.indexOf(remover)

let produtos: String = this.produtos.splice(index, 1)
let adicionar: String = this.adiciona = 'adiciona';
let remove: String = this.remover = 'remover';
*/ 
