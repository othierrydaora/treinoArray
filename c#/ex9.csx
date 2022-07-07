/*09. Implementar uma função que recebendo um array de números inteiros, retorne seu menor valor.*/

public void Def(int[] args)
{
    int cnt = args[0];
    for (int i = 0; i < args.Length; i++) if (args[i] < cnt) cnt = args[i];
    Console.WriteLine(cnt);
}

Def(new int[] {123, 4, 2, 3, 6});
