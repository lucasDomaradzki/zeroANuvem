import {fatorial} from './fatorial'
// import * as fatorial from './fatorial'
// const fatorial = require('./dist/fatorial')

console.log('==== n-fatorial ====')

const argv = require('yargs').demandOption('num').argv

//
/*console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', () =>  {
  console.log('Script está prestes a terminar.')
})*/

const num = argv.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

// console.log(module.paths)