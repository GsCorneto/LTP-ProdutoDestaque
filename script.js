class Produtos{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao, 
        this.preco = preco
    }
    mostrar_produto(){
         return `
         <div>
         <h2>${this.nome}</h2>
            <div>${this.preco}</div>
            <p>${this.descricao}</p>
        </div>
         `

        //return "Nome: " + this.nome + " ,Data de Cadastro: " + this.dataCadastro + " ,Descrição: " + this.descricao + " ,Preço: R$" + this.preco
    }
}
const prod = new Produtos("Wesker", "25/04/2023", "Muita Nostalgia", 250)
console.log(prod.mostrar_produto())


class ProdutoDestaque extends Produtos{
    constructor(nome, dataCadastro, descricao, preco, img){
        super(nome, dataCadastro, descricao, preco)
        this.img = img;
    }
    mostrar_produto_destaque(){
          return  `
            <h2>${this.nome}</h2>
            <div>${this.dataCadastro}</div>
            <p>${this.descricao}</p>
            <img src= ${this.img} class="imagem"></img>
                  `
        //return "Nome: " + this.nome + " ,Data de Cadastro: " + this.dataCadastro + " ,Descrição: " + this.descricao + " ,Preço: R$" + this.preco
    }
}
 const prodDes = new ProdutoDestaque("Leon S. Kennedy", "21/07/1977", "HEEEEELLLPP!", 20, "https://static.wikia.nocookie.net/residentevil/images/1/12/Image4kq8.jpg/revision/latest?cb=20120414235220&path-prefix=pt-br")
 console.log(prodDes)

let pr1 = document.getElementById("prod")
let pr2 = document.getElementById("prodDes")

pr1.insertAdjacentHTML('afterbegin', prod.mostrar_produto())
pr2.insertAdjacentHTML('afterbegin', prodDes.mostrar_produto_destaque())
 //divListaProduto.insertAdjacentHTML('afterbegin', '');