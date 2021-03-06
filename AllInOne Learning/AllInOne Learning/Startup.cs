using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;
using AllInOne_Learning.ExtensionsForConfigureServices;
using AllInOne_Learning.Middlewares;
using SimpleInjector;
using RepositoryPattern.DataLayer.InterfacesDL;
using RepositoryPattern.DataLayer;
using SimpleInjector.Lifestyles;
using RepositoryPattern;

namespace AllInOne_Learning
{
    public class Startup
    {
        Container container = null;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            container = new Container(); //waste
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            #region custom extensions
            
            services.GetServicesForToken();//Now we have to authenticate the token as well
            services.GetDependencyInjection(Configuration);
            #endregion

            //not working
            //container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();
            //container.Register<GenericDbContext>(Lifestyle.Scoped);
            //container.Register<IRequestDL, RequestDL>(Lifestyle.Scoped);
            //services.UseSimpleInjectorAspNetRequestScoping(container);

            services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
            services.AddSession(options => {
                options.IdleTimeout = TimeSpan.FromMinutes(5);
            });
            //this basically simplifies the exception that occurred while creating token in GenerateJWTToken class
            //Error occurred due to small length of the secret key.
            IdentityModelEventSource.ShowPII = true; 
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            
            

            //app.RequestLogger();  //implement this
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            
            app.UseAuthentication();
            app.UseCors("MyPolicy");
            app.UseHttpsRedirection();
            app.UseSession();
            app.UseMvc();
            //container.Verify();  //not working
            //app.UseEndpoints
        }
    }
}
