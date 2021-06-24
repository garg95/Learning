using AllInOne_Learning.Middlewares.RequestLog;
using Microsoft.AspNetCore.Builder;
using RepositoryPattern.DataLayer.InterfacesDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllInOne_Learning.Middlewares
{
    public static class RequestLoggerMiddleware
    {
        public static IApplicationBuilder RequestLogger(this IApplicationBuilder applicationBuilder)
        {
            applicationBuilder.UseMiddleware<RequestLogger>();
            return applicationBuilder;
        }
    }
}
