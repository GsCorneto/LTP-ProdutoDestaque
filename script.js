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


class ProdutoDestaque extends Produtos{
    constructor(nome, dataCadastro, descricao, preco,){
        super(nome, dataCadastro, descricao, preco)
    }
    mostrar_produto_destaque(){
          return  `
            <h1>${this.nome}</h1>
            <div>${this.dataCadastro}</div>
            <p>${this.descricao}</p>
            `
        //return "Nome: " + this.nome + " ,Data de Cadastro: " + this.dataCadastro + " ,Descrição: " + this.descricao + " ,Preço: R$" + this.preco
    }
}
 const prodDes = new ProdutoDestaque("Leon S. Kennedy", "21/07/1977", "HEEEEELLLPP!", 20)
 console.log(prodDes)

let pr1 = document.getElementById("prod")
let pr2 = document.getElementById("prodDes")

//pr1.insertAdjacentHTML('afterbegin', prod.mostrar_produto())
pr2.insertAdjacentHTML('afterbegin', prodDes.mostrar_produto_destaque())
 //divListaProduto.insertAdjacentHTML('afterbegin', '');