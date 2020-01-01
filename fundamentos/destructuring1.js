// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade } = pessoa // tire de dentro do objeto (pessoa) o atributo nome e idade
console.log (nome, idade)

const {nome: n, idade: i} = pessoa  // tire de dentro do objeto (pessoa) o atributo nome e idade e crie váriaveis com o nome definido por vc para manipular os dados
console.log (n, i)

const {sobrenome, bemHumarada = true} = pessoa 
console.log (sobrenome, bemHumarada) // nao da erro pq o objeto pessoa existe

const{endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro,numero,cep)

const {conta: {ag, numero}} = pessoa // vai dar erro pq o objeto conta nao existe