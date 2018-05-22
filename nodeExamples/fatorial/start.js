

const fatorial  = (num)=>{
    if(num === 0) {
        return 1
    }

    return num * fatorial (num - 1)
}

// exports.fatorial = fatorial

//exports faz referência para module.exports

module.exports = fatorial

// Caso houvesse vários
// module.exports = {
//     fatorial    
// }