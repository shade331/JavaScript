const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' 
const template = ` 
    Olá
    ${nome}!` // template usa crase ou backtip. $(nome) faz a interpolação/interpretação e substitui na frase pela variavel indicada
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // deixar tudo maiusculo
console.log(`Ei... ${up('cuidado')}!`)