// 18. Implementar uma função que recebendo um array de números inteiros, retorne seu maior produto.

function def(arr) {
    let um = arr[0];
    let dois = arr[1];
    for (let i = 0; i < arr.length; i++)
        if (arr[i] >= um) {
            dois = um;
            um = arr[i];
        }
    return um * dois;
}

console.log(def([1, 2, 8, 4, 7, 8]));
