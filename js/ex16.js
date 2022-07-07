/* 16. Implementar uma função que recebendo um texto, retorne um array de texto com o código ascii de cada caractere. */

function ascii(args) {
    let rst = [args.length];
    for (let i = 0; i < args.length; i++) {
        rst[i] = args.charCodeAt(i);
    }
    return rst;
}

console.log(ascii('Bruno'));
