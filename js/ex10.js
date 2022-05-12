/* 10. Implementar uma função que recebendo um array de números inteiros, some seus elementos. */
function def(args) {
    let cnt = 0;
    for (let s = 0; s < args.length; s++) cnt += args[s]; //somar
    console.log(cnt);
}

def(new Array(1, 1, 1,2 ,5));
