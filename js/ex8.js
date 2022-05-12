/* 08. Implementar uma função que recebendo um array de números inteiros, retorne seu maior valor. */
function def(args) {
    let cnt = 0;

    for (let i = 0; i < args.length; i++) {
        let z = args[i];
        if (z > cnt) cnt = z;
    }
    console.log(cnt);
}

def(new Array(1, 4, 6, 3, 6));
