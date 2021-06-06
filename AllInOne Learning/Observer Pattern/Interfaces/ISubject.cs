using System;
using System.Collections.Generic;
using System.Text;

namespace Observer_Pattern
{
    public interface ISubject
    {
        void Attach(IObserver observer);
        void Notify();
    }
}
