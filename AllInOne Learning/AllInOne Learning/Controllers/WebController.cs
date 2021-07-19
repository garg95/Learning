using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("con/[controller]")]
    public class WebController : Controller
    {
        int i;
        public IActionResult Index()
        {
            byte[] b = null;
            if(HttpContext.Session.TryGetValue("valueofi",out b))
            {
                i = (int)HttpContext.Session.GetInt32("valueofi");
            }
            i = i+1;
            HttpContext.Session.SetInt32("valueofi", i);
            return View();
        }
    }
}