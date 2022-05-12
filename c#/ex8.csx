/* 08. Implementar uma função que recebendo um array de números inteiros, retorne seu maior valor. */
public void Def(int[] args)
{
    int cnt = 0;

    for (int i = 0; i < args.Length; i++)
    {
        int z = args[i];
        if (z > cnt) cnt = z;
    }
    Console.WriteLine(cnt);
}

Def(new int[] {1, 4, 6, 3, 6});