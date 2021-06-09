using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryPattern
{
    public class GenericRepository<TEntity> where TEntity : class
    {
        //DbSet
        private DbContext _dbContext;
        public GenericRepository(DbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
