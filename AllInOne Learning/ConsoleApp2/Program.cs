using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            var source = Enumerable.Range(1, 10000);
            var evennums = from num in source.AsParallel()
                           where num % 2 == 0
                           select num;
            Console.WriteLine(evennums.Count()+" " +source.Count());
            //TestHack t = new TestHack();
            //foreach (char val in t)
            //    Console.Write(val + "");
            //Console.WriteLine();
            //Console.ReadLine();
        }
    }
    //}
    //class TestHack
    //{
    //    char val = 'X';
    //    public IEnumerator<char> GetEnumerator()
    //    {
    //        for (int i = 20; i >= 0; --i)
    //            yield return (char)((val + i));
    //    }
    //}
}
