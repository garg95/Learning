using System;
using System.Threading;

namespace Deadlock_using_Synchronization
{
    class Deadlock
    {
        public Deadlock other;
        public void demo()
        {
            Thread.Sleep(1000);
            other.Hello();
        }
        public void Hello()
        {
            Console.WriteLine("Hello");
        }
    }
    class Program
    {
        
        static void Main(string[] args)
        {
            
            Deadlock d1 = new Deadlock();
            Deadlock d2 = new Deadlock();
            d1.other = d2;
            d2.other = d1;
            Thread t1 = new Thread((ThreadStart)d1.demo);
            t1.Start();
            d2.demo();
        }
    }
}
