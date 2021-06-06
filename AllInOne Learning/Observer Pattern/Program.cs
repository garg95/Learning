using System;

namespace Observer_Pattern
{
    class Program
    {
        static void Main(string[] args)
        {
            //Weather forecast is our subject which will notify all the observers(in our case it is newsagency) .
            WeatherForecast weatherForecast = new WeatherForecast();
            NewsAgency newsAgency1 = new NewsAgency("AajTak");
            weatherForecast.Attach(newsAgency1);
            NewsAgency newsAgency2 = new NewsAgency("RepublicBharat");
            weatherForecast.Attach(newsAgency2);
            weatherForecast.Temperature = 28.34f;
            weatherForecast.Temperature = 29.34f;
        }
    }

}
