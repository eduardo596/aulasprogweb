{ 
    { 
        { 
            { 
                var sera = 'Será?'  // qunado criada uma variavel dentro de um escopo que não pertence a funcões ela é visitel por todo o código
            } 
        } 
    } 
}

console.log(sera)

function teste (){ // quando definida uma variavel dentro de uma função ela estará visivel apenas em seu escopo
    var local = 123
}

teste()
console.log(local)