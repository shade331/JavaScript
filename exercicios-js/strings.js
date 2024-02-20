const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o valor no indice 4
console.log(escola.charAt(5)) // retorna o valor no indice 5
console.log(escola.charCodeAt(3)) // retorna o unicode do indice 3
console.log(escola.indexOf('3')) // retorna o índice que se encontra a letra 3

console.log(escola.substring(1)) // imprime do indice 1 pra frente
console.log(escola.substring(0, 3)) // imprime do indice 0 até o 3 sem incluir o 3
console.log('Escola '.concat(escola).concat("!")) // .concat é usado para concatenar strings
console.log('Escola' + escola + "!") // o aritimético + também serve para concatenar strings
console.log(escola.replace(3, 'e')) // substitui o terceiro index pela letra e

console.log('Ana,Maria,Pedro'.split(",")) // split é a quebra dos elementos da string para formar um array