using System;
using System.Text;
using System.Threading;

namespace Deadlock
{
    class Program
    {
        class Deadlock
        {
            private static object obj1 = new object();
            private static object obj2 = new object();
            public static StringBuilder sb = new StringBuilder();
            public static void OblivionFunction()
            {
                lock(obj1)
                {
                    Thread.Sleep(1000);
                    lock(obj2)
                    {
                        sb.Append("OblivionFunction \n");
                    }
                }
            }
            public static void BlindFunction()
            {
                lock (obj2)
                {
                    Thread.Sleep(1000);
                    lock (obj1)
                    {
                        sb.Append("BlindFunction \n");
                    }
                }
            }
        }
        static void Main(string[] args)
        {
            Thread t1 = new Thread(Deadlock.BlindFunction);
            Thread t2 = new Thread(Deadlock.OblivionFunction);
            t1.Start();
            t2.Start();
            while(true)
            {
                //stare at 2 threads
            }

        }
    }
}
