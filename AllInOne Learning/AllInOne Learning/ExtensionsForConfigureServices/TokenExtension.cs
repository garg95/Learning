using Microsoft.AspNetCore.Authentication.Cookies;
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
            #region googleAPI token authentication
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie(options =>
            {
                options.LoginPath = "/con/googleapi/index"; //this is basically reroutes whenever u try to access unauthorized page
            })
            .AddGoogle(options =>
            {
                options.ClientId = "741556789535-s3tufo74m2arffip4b4rfaopt8b8eetb.apps.googleusercontent.com";
                options.ClientSecret = "ZTcOlxyxtTJCpI74Ox2FuRWt";
            });
            #endregion
            return services;
        }
    }
}
