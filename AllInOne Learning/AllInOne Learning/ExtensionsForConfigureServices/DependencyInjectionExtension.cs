using AllInOne_Learning.DataLayer;
using AllInOne_Learning.DataLayer.Interface;
using CloudinaryImageUpload;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllInOne_Learning.ExtensionsForConfigureServices
{
    public static class DependencyInjectionExtension
    {
        public static IServiceCollection GetDependencyInjection(this IServiceCollection services)
        {
            services.AddScoped<ICompanyData, CompanyData>();
            services.AddScoped<ICloudinarySystem, CloudinarySystem>();
            return services;
        }
    }
}
