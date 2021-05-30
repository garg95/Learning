using System;
using System.Collections.Generic;
using System.Text;

namespace Keywords
{
    public static class Var_Dynamics_Object
    {
        public static void Main()
        {

            object obj = new customer();
            var varVal = new customer(); //var keywords should be initialised while declaring a variable
            dynamic dyn = new customer();

            customer cObj = (customer)obj; //object needs to be type casted
            cObj.Name = "vishal";

            cObj.Name = varVal.Name; //No need to typecast var keyword

            cObj.Name = dyn.Name;
        }
        static void AnotherFunc()
        {

        }
    }
    public class customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
