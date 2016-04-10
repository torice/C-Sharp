/* Thanks - http://rosettacode.org/wiki/Anonymous_recursion#C.23.  */

using System;

public class Fibonacci {

    static void Main(string[] args) {
        int n = Int32.Parse(args[0]);

        if (n < 0) {
            throw new ArgumentException("Must be non negative", "n");
        }

        // Define function 'functionality', In & out types.
        Func<int, int> fib = null;
        fib = p => p > 1 ? fib(p - 2) + fib(p - 1) : p;
        Console.WriteLine(fib(n));
    }

}
