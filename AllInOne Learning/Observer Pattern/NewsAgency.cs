using System;
using System.Collections.Generic;
using System.Text;

namespace Observer_Pattern
{
    public class NewsAgency : IObserver
    {
        private string _agencyName { get; set; }
        public NewsAgency(string AgencyName)
        {
            _agencyName = AgencyName;
        }

        public void Update(ISubject subject)
        {
            if (subject is WeatherForecast weatherForecast)//this basically typecast into WeatherForecast and store it in variable weatherForecast
                Console.WriteLine(string.Format("{0} Agency reported that current temperature is {1}", _agencyName, weatherForecast.Temperature));
        }
    }
}
