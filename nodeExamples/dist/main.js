// import {fatorial} from './fatorial'
// import * as fatorial from './fatorial'
var fatorial = require('./dist/fatorial');
console.log('==== n-fatorial ====');
var argv = require('yargs').demandOption('num').argv;
//
/*console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', () =>  {
  console.log('Script está prestes a terminar.')
})*/
var num = argv.num;
console.log("O fatorial de " + num + " \u00E9 igual a " + fatorial(num));
// console.log(module.paths)
