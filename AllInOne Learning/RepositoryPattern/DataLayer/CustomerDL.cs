using Microsoft.EntityFrameworkCore;
using RepositoryPattern.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RepositoryPattern
{
    public class CustomerDL:BaseRepository<Customer>,ICustomerDL
    {
        private readonly GenericDbContext genericDbContext;

        public CustomerDL(GenericDbContext genericDbContext):base(genericDbContext)
        {
            this.genericDbContext = genericDbContext;
        }
        public Customer GetById(int id)
        {
           var val= _dbContext.Customer.Include("Orders").FirstOrDefault(x => x.Id == id);
            return val;
        }
    }
}
