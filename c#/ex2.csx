/* 02. Implementar uma função que recebendo um número limite, retorne um array contendo uma sequência de 0 até o número anterior ao limite. */
public int[] Def(int lm)
{
    int[] x = new int[lm];
    for (int i = lm - 1; i >= 0; i--) x[i] = i;
    return x;
}

public void Heresia(int[] args)
{
    for (int i = 0; i < args.Length; i++) Console.Write(args[i] + ", ");
}

Heresia(Def(5));