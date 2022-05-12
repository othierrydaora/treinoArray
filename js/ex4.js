/* 04. Implementar uma função que recebendo um número limite, retorne um array contendo uma sequência de 1 até o número limite. */
function def(lm) {
    let x = [lm];
    for (let i = 1; i <= lm; i++) x[i - 1] = i;
    console.log(x);
}

def(5);
