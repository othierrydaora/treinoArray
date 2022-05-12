/*01. Implementar uma função que recebendo um array de números inteiros, escreva seus elementos no terminal. */
function heresia(args) {
    for (let i = 0; i < args.length; i++) console.log(args[i]);
}

const heresiaTwo = (args) => { for (let i = 0; i < args.length; i++) process.stdout.write(args[i] + ', '); }



heresiaTwo(new Array(2, 3, 5, 2, 5, 9));