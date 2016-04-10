/* Thanks - http://rosettacode.org/wiki/Reverse_a_string#C.23. */

using System;

public class ReverseString {

    static void Main(string[] args) {
        if (args.Length != 1) {
            Console.WriteLine("Exiting... Must provide exactly one argument.");
            return;
        }

        string input = args[0];

        // Strings are immutable so we must create a character array.
        char[] inputChars = input.ToCharArray();

        // Use library array function to reverse characters.
        Array.Reverse(inputChars);

        // Create a new string from character array.
        Console.WriteLine(new string(inputChars));
        return;
    }

}