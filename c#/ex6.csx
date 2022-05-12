/* 06. Implementar uma função que recebendo um número de início e fim, retorne um array contendo uma sequência do número de início até o número final. */
public int[] Def(int ini, int en)
{
    int[] x = new int[en - ini + 1];
    int z = ini;
    for (int i = 0; i <= en - ini; i++)
    {
        x[i] = z;
        z++;
    }
    return x;
}

public void Heresia(int[] args)
{
    for (int i = 0; i < args.Length; i++) Console.Write(args[i] + ", ");
}

Heresia(Def(5, 9));
