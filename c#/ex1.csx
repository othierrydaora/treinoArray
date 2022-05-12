/*01. Implementar uma função que recebendo um array de números inteiros, escreva seus elementos no terminal. */
public void Heresia(int[] args)
{
    for (int i = 0; i < args.Length; i++)
    {
        if (i == 0) Console.Write("[ {0}, ", args[i]);
        else if (i == args.Length - 1) Console.Write("{0} ]", args[i]);
        else Console.Write(args[i] + ", ");
    }
}

Heresia(new int[] {1, 5, 2, 87 ,5});
