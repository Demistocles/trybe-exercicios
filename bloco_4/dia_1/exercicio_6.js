const peao = 'Movimento para frente';
const torre = 'Movimento para frente';
const bispo = 'Movimento diagonal';
const cavalo = 'Movimento em "L"';
const rainha = 'Movimento para os lados, para frente e em diagonal'
const rei = 'Movimento para os lados, para frente e em diagonal'

const readline = require('readline');
const resp = "";

const leitor = readline.pecaxadrez({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Diga o nome de uma peça de Xadrez: ') 
    if(leitor.question === 'peão' || 'peao'){
        console.log(peao)
    } 
