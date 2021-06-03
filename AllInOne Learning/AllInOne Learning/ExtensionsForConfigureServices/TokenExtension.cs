using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AllInOne_Learning.ExtensionsForConfigureServices
{
    public static class TokenExtension
    {
        public static IServiceCollection GetServicesForToken(this IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,
                            ValidIssuer = "Vishal",
                            ValidAudience = "Vishal",
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("pintusharmaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqweqwe@hj"))
                        };
                    });
            return services;
        }
    }
}
