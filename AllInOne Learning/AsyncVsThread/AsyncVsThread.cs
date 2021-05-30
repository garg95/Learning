using System;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncVsThread
{
    public class AsyncVsThread
    {
        static StringBuilder sb = new StringBuilder();
        public static async Task<string> InitialMethod()
        {
            sb.Append("Work started" + "\n");
            await Method1();
            await Method2();
            // Parallel.Invoke(() => { Method1(); }, () => { Method2(); }); //not able to use await with this
            return sb.ToString();
        }
        public static async Task Method1()
        {
            await Task.Delay(5000);
            sb.Append("Work from Method 1 after 5 seconds" + "\n");
        }
        public static async Task Method2()
        {
            await Task.Delay(2000);
            sb.Append("Work from Method 2 after 2 seconds" + "\n");
        }
    }
}
