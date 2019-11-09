// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // irá reconhecer apenas as duas variaveis alocadas na funcao
imprimirSoma() // vai executar mas não retronar resultado

// funcao sem retorno
function soma(a, b = 0){
    return a + b
}

console.log (soma)