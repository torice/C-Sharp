/* Thanks - http://rosettacode.org/wiki/Anonymous_recursion#C.23.  */

using System;

public class Fibonacci {

    static void Main(string[] args) {
        if (args.Length != 1) {
            Console.WriteLine("Exiting... Must provide exactly one argument.");
            return;
        }

        int n;
        bool notNumeric = !int.TryParse(args[0], out n);

        if (notNumeric) {
            Console.WriteLine("Exiting... Argument must be a number.");
            return;
        }

        if (n < 0) {
            Console.WriteLine("Exiting... Argument must be non negative.");
            return;
        }

        // Define function 'functionality', In & out types.
        Func<int, int> fib = null;
        fib = p => p > 1 ? fib(p - 2) + fib(p - 1) : p;
        Console.WriteLine(fib(n));
    }

}
