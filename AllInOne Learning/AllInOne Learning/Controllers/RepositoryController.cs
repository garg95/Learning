using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RepositoryPattern;
using RepositoryPattern.DataLayer.InterfacesDL;
using RepositoryPattern.DataModel;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepositoryController : ControllerBase
    {
        private readonly ICustomerDL customerDataLayer;
        private readonly IOrdersDL ordersDL;

        public RepositoryController(ICustomerDL customerDataLayer,IOrdersDL ordersDL)
        {
            this.customerDataLayer = customerDataLayer;
            this.ordersDL = ordersDL;
        }

        public List<Customer> Get()
        {
            List<Customer> customers = customerDataLayer.GetAllData().ToList();
            Customer customer = customerDataLayer.GetById(1);
            return customers;
        }
    }
}