const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// para usar uma função deve-se usar o '.' antes, exemplos abaixo 

console.log(media.toFixed(2)) // .tofixed(n) indica quantas casas decimais devem aparecer.
console.log(media.toString(2)) // .toString(2) serve para converter um valor em binario
console.log(typeof media) // typeof diz o tipo da variavel
console.log(typeof Number) // Number com N maiusculo é uma função e com n minusculo é um tipo de dado (variavel).