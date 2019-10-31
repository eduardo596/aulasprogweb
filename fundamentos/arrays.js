const valores = [7.7, 8.9, 6.3, 9.2] // para criar um array usa-se um [] e a separação dos elementos se dá pela virgula
console.log(valores[0], valores[3])
console.log (valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length) //.length informa quantos elementos estão dentro do array

valores.push({id: 3}, false,  null, 'teste') // push serve para adicionar novos elementos no array a contar do primeiro espaço vazio em diante
console.log(valores)

console.log(valores.pop()) // retira o ultimo valor do array com o .pop
delete valores[0] // deleta um valor especifico dentro de um array 
console.log(valores)

console.log(typeof valores)