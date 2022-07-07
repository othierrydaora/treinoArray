// 21. Implementar uma função que recebendo um array de números inteiros e um número, retorne um novo array com o número adicionado no começo.

function def(arr, numbar) {
    return [numbar, ...arr];
}

console.log(def([1, 2, 3, 4], 0));
