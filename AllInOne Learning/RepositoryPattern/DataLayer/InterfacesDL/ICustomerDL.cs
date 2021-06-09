using RepositoryPattern.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryPattern
{
    public interface ICustomerDL :IBaseRepository<Customer> 
    {
        Customer GetById(int id);
    }
}
