/* Thanks - http://stackoverflow.com/questions/3823848/creating-a-very-simple-linked-list. */

using System;

public class Node {
    public Node next;
    public Object data;
}

public class LinkedList {
    private Node head;
    
    static void Main(string[] args) {
        Console.WriteLine("Add First:");
        LinkedList myList1 = new LinkedList();

        myList1.AddFirst("Hello");
        myList1.AddFirst("Magical");
        myList1.AddFirst("World");
        myList1.printAllNodes();

        Console.WriteLine();

        Console.WriteLine("Add Last:");
        LinkedList myList2 = new LinkedList();

        myList2.AddLast("Hello");
        myList2.AddLast("Magical");
        myList2.AddLast("World");
        myList2.printAllNodes();
    }

    public void printAllNodes() {
        Node current = this.head;
        while (current != null) {
            Console.WriteLine(current.data);
            current = current.next;
        }
    }

    public void AddFirst(Object data) {
        Node toAdd = new Node();

        toAdd.data = data;
        toAdd.next = this.head;

        this.head = toAdd;
    }

    public void AddLast(Object data) {
        if (this.head == null) {
            this.head = new Node();

            this.head.data = data;
            this.head.next = null;
        }
        else {
            Node toAdd = new Node();
            toAdd.data = data;

            Node current = this.head;
            while (current.next != null) {
                current = current.next;
            }

            current.next = toAdd;
        }
    }
}

