/* 11. Implementar uma função que recebendo um array de números inteiros, calcule a média dos elementos. */
public void Def(int[] args)
{
    int cnt = 0;
    int s;
    for (s = 0; s < args.Length; s++) cnt += args[s]; //somar
    Console.WriteLine(cnt / s);
}

Def(new int[] {3, 6, 9, 12});
