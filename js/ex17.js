/* 17. Implementar uma função que recebendo um array de números inteiros, retorne o array com o menor elemento na primeira posição. */

function def(arr) {
	let menor = arr[0]
	for (let i = 0; i < arr.length; i++)
		if (arr[i] < menor) menor = arr[i];
	return [menor, ...arr];
}

console.log(def([6, 3, 5, 2, 7, 4, 3, 8]));
