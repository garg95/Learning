using System;
using System.Text;
using System.Threading;

namespace Keywords
{
    public static class VolatileInThreading
    {
        static StringBuilder sb = new StringBuilder(); 
        public static string Main()
        {
            Worker workerObject = new Worker();
            Thread workerThread1 = new Thread(workerObject.DoWork);
            Thread workerThread2 = new Thread(workerObject.DoWork);
            workerThread1.Start();
            workerThread2.Start();
            sb.Append("Main thread: starting worker thread..." + "\n");
            while (!workerThread1.IsAlive) ;
            Thread.Sleep(1);
            workerObject.RequestStop();
            workerThread1.Join();
            workerThread2.Join();
            sb.Append("Main thread: worker thread has terminated." + "\n");
            return sb.ToString();
        }
        public class Worker
        {
            private volatile bool shouldStop;
            public void DoWork()
            {
                while (shouldStop)
                {
                    sb.Append("Worker thread: working..."+"\n");
                }
                sb.Append("Worker thread: terminating gracefully." + "\n");
            }
            public void RequestStop()
            {
                shouldStop = true;
            }
        }
    }
}
