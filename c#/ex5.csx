/* 05. Implementar uma função que recebendo um número limite, retorne um array contendo uma sequência do número limite até 1. */
public int[] Def(int lm)
{
    int[] x = new int[lm];
    for (int i = lm - 1; i >= 0; i--) x[i] = lm - i;
    return x;
}

public void Heresia(int[] args)
{
    for (int i = 0; i < args.Length; i++) Console.Write(args[i] + ", ");
}

Heresia(Def(5));