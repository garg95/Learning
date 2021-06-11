using System;
using System.IO;
using System.Net;

namespace WebRequest1
{
    class Program
    {
        static void Main()
        {
            string url = @"https://jsonplaceholder.typicode.com/posts";
            HttpWebRequest  webRequest=(HttpWebRequest)WebRequest.Create(url);
            webRequest.Method = "POST";
            webRequest.ContentType = "application/x-www-form-urlencoded";
            string strResponse = string.Empty;
            string data = "1";
            using (StreamWriter streamWriter = new StreamWriter(webRequest.GetRequestStream()))
            {
                streamWriter.Write(data);
            }
            using (StreamReader responseStream = new StreamReader(webRequest.GetResponse().GetResponseStream()))
            {
                strResponse = responseStream.ReadToEnd();
                responseStream.Close();
            }
        }
    }
}
