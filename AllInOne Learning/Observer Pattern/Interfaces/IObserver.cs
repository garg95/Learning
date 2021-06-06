using System;
using System.Collections.Generic;
using System.Text;

namespace Observer_Pattern
{
    public interface IObserver
    {
        void Update(ISubject subject);
    }
}
