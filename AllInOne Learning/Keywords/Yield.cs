using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Keywords
{
    public static class Yield
    {
        static StringBuilder sb = new StringBuilder();
        static List<int> MyList = new List<int>();
        public static string Main()
        {
            FillValues();
            //here we get all the elements of list
            foreach(int i in MyList)
            {
                sb.Append(i);
            }
            sb.Append("\n Numbers greater than 3 \n");
            //now lets say we want only those elements which are greater than 3
            //what mostly do is create this below function
            //here we get all the elements of list
            foreach (int i in Filter())
            {
                sb.Append(i);
            }
            sb.Append("\n Numbers greater than 3, this time with yield function \n");
            //This Filter can also be achieved using yield keyword also
            foreach (int i in FilterYield())
            {
                sb.Append(i );
            }
            var typeOfYieldReturn = FilterYield();
            var typeOfNormalReturn = Filter();
            sb.Append("\n Running total example...Example of stateful custom iteration \n");
            //Lets see the example of custom stateful iteration
            //Lets create a program of running total
            foreach (int i in RunningTotal())
            {
                sb.Append(i + " ");
            }
            return sb.ToString();
        }
        public static IEnumerable<int> RunningTotal()
        {
            //here this total value is preserved when it enters back 
            int total = 0;
            foreach (int i in MyList)
            {
                total+=i;
                yield return total;
            }
        }
//This FilterYield functionn is the example of custom iteration
public static IEnumerable<int> FilterYield()
        {
            foreach (int i in MyList)
            {
                if (i > 3)
                    yield return i;
            }
        }
        public static IEnumerable<int> Filter()
        {
            List<int> tempDB = new List<int>();
            foreach(int i in MyList)
            {
                if (i > 3)
                    tempDB.Add(i);
            }
            return tempDB;
        }
        static void FillValues()
        {
            MyList.Add(1);
            MyList.Add(2);
            MyList.Add(3);
            MyList.Add(4);
            MyList.Add(5);
        }
    }
}
