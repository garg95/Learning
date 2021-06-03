using AllInOne_Learning.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllInOne_Learning.DataLayer.Interface
{
    public interface ICompanyData
    {
        List<Company> GetCompanies();
        Company GetCompany(int id);
    }
}
