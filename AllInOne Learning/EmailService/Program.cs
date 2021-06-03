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
                smtpClient.Port = 465; //587
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.EnableSsl = true;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new NetworkCredential("garg.vishu95@gmail.com", "Bornsince1995");
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtpClient.Send(mailMessage);
            }
            catch (Exception ex)
            {
                Console.Write(string.Format("lol {0}",ex.Message));
            }
        }
    }
}
