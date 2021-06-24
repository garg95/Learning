using AllInOne_Learning.DataLayer;
using AllInOne_Learning.DataLayer.Interface;
using CloudinaryImageUpload;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RepositoryPattern;
using RepositoryPattern.DataLayer;
using RepositoryPattern.DataLayer.InterfacesDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllInOne_Learning.ExtensionsForConfigureServices
{
    public static class DependencyInjectionExtension
    {
        public static IServiceCollection GetDependencyInjection(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddScoped<ICompanyData, CompanyData>();
            services.AddScoped<ICloudinarySystem, CloudinarySystem>();
            services.AddDbContext<GenericDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("Default")));
            services.AddScoped<ICustomerDL, CustomerDL>();
            services.AddScoped<IOrdersDL, OrdersDL>();
            services.AddScoped<IRequestDL, RequestDL>();
            return services;
        }
    }
}
