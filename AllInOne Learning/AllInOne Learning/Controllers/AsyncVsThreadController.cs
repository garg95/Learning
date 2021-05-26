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
    public class AsyncVsThreadController : ControllerBase
    {
        public async Task<string> Get()
        {
            return await AsyncVsThread.AsyncVsThread.InitialMethod();
        }
    }
}