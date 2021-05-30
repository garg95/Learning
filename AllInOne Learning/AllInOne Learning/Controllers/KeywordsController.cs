using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Keywords;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KeywordsController : ControllerBase
    {
        /// <summary>
        /// Volatile keyword
        /// </summary>
        /// <returns></returns>
        public string GetVolatile()
        {
            return Keywords.VolatileInThreading.Main();
        }
        /// <summary>
        /// var object dynamics
        /// </summary>
        /// <returns></returns>
        [Route("vardynobj")]
        public void Get()
        {
            Var_Dynamics_Object.Main();
        }
    }
}