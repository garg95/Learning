using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearningDelegatesAndEvents;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DelegateAndEventsController : ControllerBase
    {
        DelegatesAndEvents delegatesAndEvents = new DelegatesAndEvents();
        [HttpGet]
        public string Get()
        {
            return delegatesAndEvents.Initialmethod();
        }
    }
}