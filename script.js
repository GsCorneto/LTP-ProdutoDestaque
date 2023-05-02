class Produtos{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao, 
        this.preco = preco
    }
    mostrar_produto(){
        return "Nome: " + this.nome + " ,Data de Cadastro: " + this.dataCadastro + " ,Descrição: " + this.descricao + " ,Preço: R$" + this.preco
    }
}
const prod = new Produtos("Wesker", "25/04/2023", "Muita Nostalgia", 250)
console.log(prod.mostrar_produto())


class ProdutoDestaque
