using System;
using System.Collections.Generic;
using System.Text;

namespace Observer_Pattern
{
    public class WeatherForecast : ISubject
    {
        private List<IObserver> _observers;
        private float _temperature { get; set; }
        public float Temperature
        {
            get { return _temperature; }
            set
            {
                _temperature = value;
                Notify();
            }
        }
        public WeatherForecast()
        {
            _observers = new List<IObserver>();
        }
        public void Attach(IObserver observer)
        {
            _observers.Add(observer);
        }
        public void Notify()
        {
            _observers.ForEach(o => o.Update(this));
        }
    }
}
