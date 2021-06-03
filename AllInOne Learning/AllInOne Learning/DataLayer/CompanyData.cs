using AllInOne_Learning.DataLayer.Interface;
using AllInOne_Learning.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllInOne_Learning.DataLayer
{
    public class CompanyData : ICompanyData
    {
        static List<Company> companies = new List<Company>();
        public List<Company> GetCompanies()
        {
            return GetDummyData;
        }

        public Company GetCompany(int id)
        {
            return GetDummyData.FirstOrDefault(x => x.Id == id);
        }
        private List<Company> GetDummyData
        {
            get
            {
                Company c = new Company()
                {
                    Id = 1,
                    Name = "BOLD",
                    Employees = new List<Employee>()
                {
                    new Employee
                    {
                        Id=1,
                        Name="vishal",
                        CompanyId=1
                    },
                    new Employee
                    {
                        Id=2,
                        Name="sonam",
                        CompanyId=1
                    },
                    new Employee
                    {
                        Id=3,
                        Name="Manish",
                        CompanyId=1
                    }
                }
                };
                companies.Add(c);
                c = new Company()
                {
                    Id = 2,
                    Name = "Conduent",
                    Employees = new List<Employee>()
                {
                    new Employee
                    {
                        Id=4,
                        Name="Prashant",
                        CompanyId=2
                    },
                    new Employee
                    {
                        Id=5,
                        Name="Sameer",
                        CompanyId=2
                    },
                    new Employee
                    {
                        Id=6,
                        Name="Nitish",
                        CompanyId=2
                    }
                }
                };
                companies.Add(c);
                return companies;
            }
        }
    }
}
