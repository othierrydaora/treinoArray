// 19. Implementar uma função que recebendo um array de números inteiros e um número, retorne verdadeiro ou falso se o número existe nos elementos do array.

function def(arr, numbar) {
    for (const item of arr) {
        if (item == numbar) {
            return true;
        }
    }
    return false;
}

console.log(def([1, 2, 4, 5, 6, 7, 87, 8], 3));
