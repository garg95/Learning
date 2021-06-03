using System;

namespace Covariance_Contravariance
{
    class Program
    {
        static void Main(string[] args)
        {
            Covariance c = new Covariance();
            c.Method1();
            c.Method2();
        }

        class Covariance
        {
            public void Method1()
            {
                //this implicit conversion works fine but if we talk about array it will not be type safe (check method2)
                string str = "vishal";
                object o = str;
                o = 10;
                Console.WriteLine(o);
            }
            public void Method2()
            {

                object[] o = new string[10];
                o[0] = 10; //here we get ArrayTypeMismatch Exception so this is not type safe
                Console.WriteLine(10);
            }
        }
    }
}
