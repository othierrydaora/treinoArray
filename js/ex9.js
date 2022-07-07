/*09. Implementar uma função que recebendo um array de números inteiros, retorne seu menor valor.*/

function def(args) {
    let cnt = args[0];
    for (let i = 0; i < args.length; i++) if (args[i] < cnt) cnt = args[i];
    console.log(cnt);
}

def(new Array(123, 4, 2, 3, 6));
