class Aviso extends Error{
    constructor(message){
      super(message);
      this.name = "Alerta"
    }
  }

class Produtos{
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao, 
        this.preco = preco
    }

    mostrar_produto(){
         try{ return this.atributos();}
        catch (erro){
            console.log(erro)
        }
    }

    atributos() {
        if (this.nome != "" && this.descricao != "" && this.dataCadastro != "" && + this.preco != ""){
          return  `
          <h2>${this.nome}</h2>
          <div>${this.descricao}</div>
          <p>${this.dataCadastro}</p>
          <p>${this.preco}<button class= "compra">Contratar</button></p>
                `}
                else{
          throw new Aviso("Insira os atributos que faltam!")
      }
      }
}

const prod = new Produtos("", "25/04/2023", "Muita Nostalgia", "ptas "+ 34.546 )
const prod2 = new Produtos("John Wick", "27/11/2014", "Adora Cachorros", "CO$ "+ 10.999)
const prod3 = new Produtos("Deadpool", "12/02/1991", "Mercenário Tagarela", "USD "+ 25.987)
console.log(prod.mostrar_produto())


class ProdutoDestaque extends Produtos{
    constructor(nome, dataCadastro, descricao, preco, img){
        super(nome, dataCadastro, descricao, preco)
        this.img = img;
    }
    mostrar_produto_destaque(){
          try{ return this.atributos();}
       
        catch (erro){
            console.log(erro)
        }
    }

      atributos() {
        if (this.nome != "" && this.dataCadastro != "" && this.descricao != "" && + this.img != "" && + this.preco != ""){
          return `
          <h2>${this.nome}</h2>
          <div>${this.dataCadastro}</div>
          <p>${this.descricao}</p>
          <img src= ${this.img} class="imagem"></img>
          <p>${this.preco}<button class= "compra">Contratar</button></p>
          <h2>Trabalhador Certificado</h2>
                `}
            else{
          throw new Aviso("Insira os atributos que faltam!")
      }
      }
}




 const prodDes = new ProdutoDestaque("Leon S. Kennedy", "21/07/1977", "Enviado pelo presidente", "ptas "+ 9.654, "https://static.wikia.nocookie.net/residentevil/images/1/12/Image4kq8.jpg/revision/latest?cb=20120414235220&path-prefix=pt-br")
 console.log(prodDes)

 let prD = document.getElementById("prodDes")

let pr1 = document.getElementById("prod")
let pr2 = document.getElementById("prod2")
let pr3 = document.getElementById("prod3")

prD.insertAdjacentHTML('afterbegin', prodDes.mostrar_produto_destaque())
pr1.insertAdjacentHTML('afterbegin', prod.mostrar_produto())
pr2.insertAdjacentHTML('afterbegin', prod2.mostrar_produto())
pr3.insertAdjacentHTML('afterbegin', prod3.mostrar_produto())
 //divListaProduto.insertAdjacentHTML('afterbegin', '');