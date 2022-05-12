/* 10. Implementar uma função que recebendo um array de números inteiros, some seus elementos. */
public void Def(int[] args)
{
    int cnt = 0;
    for (int s = 0; s < args.Length; s++) cnt += args[s]; //somar
    Console.WriteLine(cnt);
}

Def(new int[] {1, 1, 1,2 ,5});
