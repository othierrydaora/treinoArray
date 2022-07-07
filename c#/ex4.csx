/* 04. Implementar uma função que recebendo um número limite, retorne um array contendo uma sequência de 1 até o número limite. */
public int[] Def(int lm)
{
    int[] x = new int[lm];
    for (int i = 1; i <= lm; i++) x[i - 1] = i;
    return x;
}

public void Heresia(int[] args)
{
    for (int i = 0; i < args.Length; i++)
    {
        if (i == 0) Console.Write("[ {0}, ", args[i]);
        else if (i == args.Length - 1) Console.Write("{0} ]", args[i]);
        else Console.Write(args[i] + ", ");
    }
}

Heresia(Def(5));
