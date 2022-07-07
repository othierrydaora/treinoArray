/*07. Implementar uma função que recebendo um número de início e fim, retorne um array contendo uma sequência do número final até o número inicial. */
function def(en ,ini) {
    let x = [en - ini + 1];
    let z = en;
    for (let i = en; i >= ini; i--) {
        x[ en - i] = z;
        z--;
    }
    console.log(x);
}

def(6, 2);
