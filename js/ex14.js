/* 14. Implementar uma função que recebendo um número, retorne um array com a tabuada desse número. */

function table(args) {
    let rst = [10];
    for (let i = 0 ; i <= 10; i++) rst[i] = args*i;
    return rst;
}

console.log(table(5));
