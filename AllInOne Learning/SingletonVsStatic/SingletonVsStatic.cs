using System;
using System.Collections.Generic;

namespace SingletonVsStatic
{
    //Singleton = Static(keyword, helps to make object global) + thread safe +lazyloading + safe iteration + encapsulation
    //Thread safe means if 2 threads are accessing static object it should be safe.
    // safe iteration means someone cannot add his/her own data in your static object.That is u will not get option to add use Ienumerable instead of list
    //encapsulation- so that someone cannot set your static object to null
    public sealed class SingletonVsStatic
    {
        private SingletonVsStatic(){        }
        //1- Encapsulate
        private static List<Country> _countries = null;
        //2- Safe Iteration
        public static IEnumerable<Country> getCountries()
        {
            //3- lazy loading
            if (_countries == null)
                _countries = new List<Country>();
            return _countries;
        }
        public static void RefreshCountries()
        {
            if (_countries != null)
            {
                //4 thread safe
                lock (_countries)
                {
                    _countries.Add(new Country() { Id = 1, Name = "India" });
                }
            }
        }
    }
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
