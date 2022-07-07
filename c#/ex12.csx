/* 12. Implementar uma função que recebendo um array de números inteiros, retorne seu segundo maior valor. */
public void Def(int[] args)
{
    int cnt = 0;
    int sec = 0;

    for (int i = 0; i < args.Length; i++)
    {
        if (cnt < args[i])
        {
            sec = cnt;
            cnt = args[i];
        }
    }
    Console.WriteLine(sec);
}

Def(new int[] {1, 4, 6, 3, 6});
