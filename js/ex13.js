/* 13. Implementar uma função que recebendo um array de números inteiros, retorne um array com o dobro de cada elemento. */

function double(args) {
    let rst = [args.length];
    for (let i = 0; i < args.length; i++) rst[i] = args[i] * 2;
    return rst;
}

console.log(double(new Array(1, 4, 3, 8, 5)));
