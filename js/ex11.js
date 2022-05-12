/* 11. Implementar uma função que recebendo um array de números inteiros, calcule a média dos elementos. */
function def(args) {
    let cnt = 0;
    let s;
    for (s = 0; s < args.length; s++) cnt += args[s]; //somar
    console.log(cnt / s);
}

def(new Array(3, 6, 9, 7));