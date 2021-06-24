using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using RepositoryPattern.DataLayer;
using RepositoryPattern.DataLayer.InterfacesDL;
using RepositoryPattern.DataModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AllInOne_Learning.Middlewares.RequestLog
{
    public class RequestLogger
    {
        private readonly RequestDelegate _next;

        private readonly IServiceProvider _serviceProvider;

        public RequestLogger(RequestDelegate next, IServiceProvider serviceProvider)
        {
            _next = next;
            _serviceProvider = serviceProvider;
        }

        public IServiceProvider ServiceProvider { get; }

        public async Task Invoke(HttpContext httpContext)
        {
            
            Stream originalBody = httpContext.Response.Body;

            try
            {
                using (var memStream = new MemoryStream())
                {
                    var scope = _serviceProvider.CreateScope();
                    var services = scope.ServiceProvider;
                    var requestDL = services.GetRequiredService<IRequestDL>();

                    Request request = new Request();
                    request.RequestData = httpContext.Request.ToString();
                    request.URI = httpContext.Request.Path;
                    request.type = httpContext.Request.Method;
                    requestDL.Add(request);

                    httpContext.Response.Body = memStream;
                    
                    
                    await _next(httpContext);

                    memStream.Position = 0;
                    string responseBody = new StreamReader(memStream).ReadToEnd();
                    
                    request.ResponseData = responseBody;
                    
                    requestDL.Update(request);
                    memStream.Position = 0;
                    await memStream.CopyToAsync(originalBody);
                }

            }
            catch (Exception ex)
            {
                httpContext.Response.StatusCode = 909; //random status code inserted 
                await httpContext.Response.WriteAsync("Error");
            }
            finally
            {
                httpContext.Response.Body = originalBody;
            }
        }
    }
}
/*
 * try using IRequestDL as DI
 */
