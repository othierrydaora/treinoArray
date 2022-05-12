/*01. Implementar uma função que recebendo um array de números inteiros, escreva seus elementos no terminal. */
function heresia(args) {
    for (let i = 0; i < args.length; i++) {
        if (i == 0) process.stdout.write(`[ ${args[i]}, `);
        else if (i == args.length - 1) process.stdout.write(`${args[i]} ]`);
        else process.stdout.write(`${args[i]}, `);
    }}

//const heresiaTwo = (args) => { for (let i = 0; i < args.length; i++) process.stdout.write(args[i] + ', '); }

heresia(new Array(2, 3, 5, 2, 5, 9));
