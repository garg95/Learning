using System;
using System.Text;
using System.Threading;

namespace LearningDelegatesAndEvents
{
    //this is been called from DelegateAndEventsController
    public class DelegatesAndEvents
    {
        StringBuilder sb = new StringBuilder();
        public string Initialmethod()
        {
            SomeClass someClass = new SomeClass();
            //Since we have linked multiple functions to a delegate, it is called multicast delegate 
            someClass.send += Receiver1;
            someClass.send += Receiver2;
            someClass.send += Receiver3;
            //someClass.send = null; //here we get error as we have added keyword event in our delegate object
            Thread thread = new Thread(new ThreadStart(someClass.Processing));
            thread.Start();
            sb.Append("Process Started......");
            Thread.Sleep(20000); // this is just to gather all the data before we return
            return sb.ToString();
        }
        //this func1 needs to have the same structure as that of delegate
        public void Receiver1(int i)
        {
            sb.Append(i.ToString()+" R1 ");
        }
        public void Receiver2(int i)
        {
            sb.Append(i.ToString() + " R2 ");
        }
        public void Receiver3(int i)
        {
            sb.Append(i.ToString() + " R3 ");
        }
    }
    class SomeClass
    {
         
        public delegate void Sender(int i);//created delegate

        //here delegate object is public, so at receiver end it can be set to null which will lead to exception of object reference cannot be set to null
        // which is called naked delegate problem. So to avoid this we make use of event
        //public Sender send = null; //created object of delegate
        public event Sender send = null;

        public void Processing()
        {
            for(int i=0;i<10;i++)
            {
                System.Threading.Thread.Sleep(1000);
                send(i);
            }
        }
    }
}
