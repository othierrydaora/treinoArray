/* 06. Implementar uma função que recebendo um número de início e fim, retorne um array contendo uma sequência do número de início até o número final. */
function def(ini ,en) {
    let x = [en - ini + 1];
    let z = ini;
    for (let i = 0; i <= en - ini; i++) {
        x[i] = z;
        z++;
    }
    console.log(x);
}

def(2, 8);
