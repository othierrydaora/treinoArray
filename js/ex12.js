/* 12. Implementar uma função que recebendo um array de números inteiros, retorne seu segundo maior valor. */
function def(args) {
    let cnt = 0;
    let sec = 0;

    for (let i = 0; i < args.length; i++) {
        if (cnt < args[i]) {
            sec = cnt;
            cnt = args[i];
        }
    }
    console.log(sec);
}

def(new Array(1, 4, 6, 3, 6));