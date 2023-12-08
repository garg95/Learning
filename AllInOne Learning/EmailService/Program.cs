using System;
using System.Net;
using System.Net.Mail;

namespace EmailService
{
    class Program
    {
        static void Main(string[] args)
        {
            SendEmail();
        }
        static void SendEmail()
        {
            try
            {
                MailMessage mailMessage = new MailMessage("garg.vishu95@gmail.com", "garg.vishal97@yahoo.com");
                mailMessage.Body = "I am awesome";
                mailMessage.Subject = "Here comes the email";
                mailMessage.IsBodyHtml = false;
                SmtpClient smtpClient = new SmtpClient();
                smtpClient.Port = 587; // 25
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.EnableSsl = true;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new NetworkCredential("garg.vishu95@gmail.com", "Shinchan@123");
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtpClient.Send(mailMessage);

                using (MailMessage mail = new MailMessage())
                {
                    mail.From = new MailAddress("garg.vishu95@gmail.com");
                    mail.To.Add("garg.vishal97@yahoo.com");
                    mail.Subject = "Hello World";
                    mail.Body = "<h1>Hello</h1>";
                    mail.IsBodyHtml = true;
                    //.Attachments.Add(new Attachment("C:\\file.zip"));

                    using (SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587))
                    {
                        smtp.Credentials = new NetworkCredential("garg.vishu95@gmail.com", "Shinchan@123");
                        smtp.EnableSsl = true;
                        smtp.Send(mail);
                    }
                }

            }
            catch (Exception ex)
            {
                Console.Write(string.Format("lol {0}",ex.Message));
            }
            Console.ReadLine();
        }
    }
}
