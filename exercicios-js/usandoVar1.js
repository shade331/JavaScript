{
    {
        {
            { 
                var sera = 'Será???' 
            }
        }
    }
}
console.log(sera) // a variavel var fica visível dentro de um bloco de código que não seja uma função

function teste() {
    var local = 123
}

teste()
//console.log(local) // exemplo de escopo não visivel da variavel var