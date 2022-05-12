/*07. Implementar uma função que recebendo um número de início e fim, retorne um array contendo uma sequência do número final até o número inicial. */
public int[] Def(int ini ,int en)
{
    int[] x = new int[en - ini + 1];
    int z = en;
    for (int i = en; i >= ini; i--)
    {
        x[ en - i] = z;
        z--;
    }
    return x;
}

public void Heresia(int[] args)
{
    for (int i = 0; i < args.Length; i++) Console.Write(args[i] + ", ");
}

Heresia(Def(5, 9));