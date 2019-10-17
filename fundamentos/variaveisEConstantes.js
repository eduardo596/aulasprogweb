var a = 3
let b = 4

var a = 30 /* variaveis do tipo var podem ser declaradas mais de uma vez no 
*mesmo arquivo, oq não deveria ocorrer, por isso é recomendável usar 'let' 
*para declarar variaveis*/ 
b = 40

console.log(a, b)

a = 300
b = 400

console.log (a, b)

const c = 5
// c = 50; não de pode mudar o valor de constantes (const)
console.log(c)