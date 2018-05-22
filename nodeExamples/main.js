const fatorial = require('./fatorial')

console.log('n-fatorial')

//
/*console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', () =>  {
  console.log('Script está prestes a terminar.')
})*/

const num = parseInt(process.argv[2])

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)