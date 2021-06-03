using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AllInOne_Learning.DataLayer.Interface;
using AllInOne_Learning.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AllInOne_Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReactFetchController : ControllerBase
    {
        private ICompanyData _companyData;
        public ReactFetchController(ICompanyData companyData)
        {
            _companyData = companyData;
        }
        public List<Company> Get()
        {
            return _companyData.GetCompanies();
        }
        [HttpGet]
        public List<Company> Get(int id)
        {
            return _companyData.GetCompanies();
        }
        [HttpPost]
        public void Post(Company c)
        {

        }
    }
}