// 20. Implementar uma função que recebendo um array de números inteiros e um número, retorne um novo array com o número adicionado ao final.

function def(arr, numbar) {
    return [...arr, numbar];
}

console.log(def([1, 2, 3, 4], 5));
