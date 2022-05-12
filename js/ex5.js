/* 05. Implementar uma função que recebendo um número limite, retorne um array contendo uma sequência do número limite até 1. */
function def(lm) {
    let x = [lm];
    for (let i = lm - 1; i >= 0; i--) x[i] = lm - i;
    console.log(x);
}

def(5);