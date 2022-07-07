/* 15. Implementar uma função que recebendo o valor de 'a', 'b' e 'c', calcule a fórmula de bhaskara. */

function formulaResolutivaDaEquacaoDoSegundoGrau(a, b, c) {
    let delta = Math.sqrt(b*b - 4*a*c);
    let sol1 = (-b + delta) / 2*a;
    let sol2 = (-b - delta) / 2*a;
    return [sol1, sol2];
}

console.log(formulaResolutivaDaEquacaoDoSegundoGrau(1, 12, -13));
