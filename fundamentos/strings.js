const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caractere na posicão do numero solicitado começando a contar do 0
console.log(escola.charAt(5)) // se não houver nada no campo solicitado, ficará em branco no resultado
console.log(escola.charCodeAt(3)) // retorna o valor do caractere na tabela unicode
console.log(escola.indexOf('o')) // verificar se existe o caractere e en qual indice está dentro da string

console.log(escola.substring(1)) // mostra a string a partir do indice inicial definido
console.log(escola.substring(0, 3)) // // mostra a string a partir do indice inicial definido e até um indice antes do segundo definido

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // replace substitui o caractere sugerido no index
console.log(escola.replace(/\w/g, 'e')) // serve para substituir todos os caracteres.

console .log('Ana,Maria,Pedro'.split(',')) // criar um array usando a virgula como separador