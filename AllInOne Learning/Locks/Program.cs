﻿using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Locks
{
    class Program
    {
        static void Main(string[] args)
        {
            

            Thread t1 = new Thread(()=> SimpleUnderstandingOfReaderWriterLockSlim.GetCache(2));
            t1.Start();
            //Thread t2 = new Thread(() => SimpleUnderstanding.GetCache(3));
            //t2.Start();
            Thread t3 = new Thread(() => SimpleUnderstandingOfReaderWriterLockSlim.WriteCache(3));
            t3.Start();
            t1.Join();
            //t2.Join();
            t3.Join();

            //SynchronizedClassImplementation();
            Console.Read();
        }
        static void SynchronizedClassImplementation()
        {
            var sc = new SynchronizedCache();
            var tasks = new List<Task>();
            int itemsWritten = 0;
            // Execute a writer.
            tasks.Add(Task.Run(() =>
            {
                String[] vegetables = { "broccoli", "cauliflower",
                                                          "carrot", "sorrel", "baby turnip",
                                                          "beet", "brussel sprout",
                                                          "cabbage", "plantain",
                                                          "spinach", "grape leaves",
                                                          "lime leaves", "corn",
                                                          "radish", "cucumber",
                                                          "raddichio", "lima beans" };
                for (int ctr = 1; ctr <= vegetables.Length; ctr++)
                    sc.Add(ctr, vegetables[ctr - 1]);
                itemsWritten = vegetables.Length;
                Console.WriteLine("Task {0} wrote {1} items\n",
                                  Task.CurrentId, itemsWritten);
            }));

            // Execute two readers, one to read from first to last and the second from last to first.
            for (int ctr = 0; ctr <= 1; ctr++)
            {
                bool desc = Convert.ToBoolean(ctr);
                tasks.Add(Task.Run(() =>
                {
                    int start, last, step;
                    int items;
                    do
                    {
                        String output = String.Empty;
                        items = sc.Count;
                        if (!desc)
                        {
                            start = 1;
                            step = 1;
                            last = items;
                        }
                        else
                        {
                            start = items;
                            step = -1;
                            last = 1;
                        }

                        for (int index = start; desc ? index >= last : index <= last; index += step)
                            output += String.Format("[{0}] ", sc.Read(index));

                        Console.WriteLine("Task {0} read {1} items: {2}\n",
                                          Task.CurrentId, items, output);
                    } while (items < itemsWritten | itemsWritten == 0);
                }));
            }
            // Execute a red/update task.
            tasks.Add(Task.Run(() =>
            {
                Thread.Sleep(100);
                for (int ctr = 1; ctr <= sc.Count; ctr++)
                {
                    String value = sc.Read(ctr);
                    if (value == "cucumber")
                        if (sc.AddOrUpdate(ctr, "green bean") != SynchronizedCache.AddOrUpdateStatus.Unchanged)
                            Console.WriteLine("Changed 'cucumber' to 'green bean'");
                }
            }));

            // Wait for all three tasks to complete.
            Task.WaitAll(tasks.ToArray());

            // Display the final contents of the cache.
            Console.WriteLine();
            Console.WriteLine("Values in synchronized cache: ");
            for (int ctr = 1; ctr <= sc.Count; ctr++)
                Console.WriteLine("   {0}: {1}", ctr, sc.Read(ctr));
        }

    }
    public class SimpleUnderstandingOfReaderWriterLockSlim
    {
        public static Dictionary<int, string> dic = new Dictionary<int, string>();
        private static ReaderWriterLockSlim _readerWriterLockSlim = new ReaderWriterLockSlim();
        public static void GetCache(int val)
        {
            _readerWriterLockSlim.EnterUpgradeableReadLock();
            try
            {
                Thread.Sleep(2000);//This is done to check if what happens to thread accessing WriteCache method and trying to enter into writelock mode
                object value=null;
                if (dic.ContainsKey(val))
                 value = dic[val];
                if(value==null)
                {
                    if (val == 2)
                        Thread.Sleep(3000);
                    string str = "";
                    for (int i = 0; i < val; i++)
                        str += val;
                    dic.Add(val, str);
                }
            }
            finally
            {
                if (_readerWriterLockSlim.IsUpgradeableReadLockHeld)
                    _readerWriterLockSlim.ExitUpgradeableReadLock();
            }
        }
        public static void WriteCache(int val)
        {
            _readerWriterLockSlim.EnterWriteLock();
            try
            {
                
                string str = "";
                for (int i = 0; i < val; i++)
                    str += val;
                dic.Add(val, str);
            }
            finally
            {
                _readerWriterLockSlim.ExitWriteLock();
            }
        }
    }

    public class SynchronizedCache
    {
        private ReaderWriterLockSlim cacheLock = new ReaderWriterLockSlim();
        private Dictionary<int, string> innerCache = new Dictionary<int, string>();

        public int Count
        { get { return innerCache.Count; } }

        public string Read(int key)
        {
            cacheLock.EnterReadLock();
            try
            {
                return innerCache[key];
            }
            finally
            {
                cacheLock.ExitReadLock();
            }
        }
        public void Add(int key, string value)
        {
            cacheLock.EnterWriteLock();
            try
            {
                innerCache.Add(key, value);
            }
            finally
            {
                cacheLock.ExitWriteLock();
            }
        }
        public bool AddWithTimeout(int key, string value, int timeout)
        {
            if (cacheLock.TryEnterWriteLock(timeout))
            {
                try
                {
                    innerCache.Add(key, value);
                }
                finally
                {
                    cacheLock.ExitWriteLock();
                }
                return true;
            }
            else
            {
                return false;
            }
        }
        public AddOrUpdateStatus AddOrUpdate(int key, string value)
        {
            cacheLock.EnterUpgradeableReadLock();
            try
            {
                string result = null;
                if (innerCache.TryGetValue(key, out result))
                {
                    if (result == value)
                    {
                        return AddOrUpdateStatus.Unchanged;
                    }
                    else
                    {
                        cacheLock.EnterWriteLock();
                        try
                        {
                            innerCache[key] = value;
                        }
                        finally
                        {
                            cacheLock.ExitWriteLock();
                        }
                        return AddOrUpdateStatus.Updated;
                    }
                }
                else
                {
                    cacheLock.EnterWriteLock();
                    try
                    {
                        innerCache.Add(key, value);
                    }
                    finally
                    {
                        cacheLock.ExitWriteLock();
                    }
                    return AddOrUpdateStatus.Added;
                }
            }
            finally
            {
                cacheLock.ExitUpgradeableReadLock();
            }
        }
        public void Delete(int key)
        {
            cacheLock.EnterWriteLock();
            try
            {
                innerCache.Remove(key);
            }
            finally
            {
                cacheLock.ExitWriteLock();
            }
        }

        public enum AddOrUpdateStatus
        {
            Added,
            Updated,
            Unchanged
        };

        ~SynchronizedCache()
        {
            if (cacheLock != null) cacheLock.Dispose();
        }
    }
}
