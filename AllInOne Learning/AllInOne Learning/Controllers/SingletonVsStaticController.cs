using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SingletonVsStaticController : ControllerBase
    {
        
        public string Get()
        {
            //SingletonVsStatic.SingletonVsStatic.getCountries(); 
            SingletonVsStatic.SingletonVsStatic.RefreshCountries();
            var countryName = SingletonVsStatic.SingletonVsStatic.getCountries();
            return "";
        }
    }
}