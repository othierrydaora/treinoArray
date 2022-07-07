/* 02. Implementar uma função que recebendo um número limite, retorne um array contendo uma sequência de 0 até o número anterior ao limite. */
function def(lm) {
    let x = [lm];
    for (let i = lm - 1; i >= 0; i--) x[i] = i;
    console.log(x);
}

def(5);
