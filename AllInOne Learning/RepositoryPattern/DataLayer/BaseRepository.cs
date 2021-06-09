using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RepositoryPattern
{
    public abstract class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity:class
    {
        //DbSet
        internal GenericDbContext _dbContext;
        private DbSet<TEntity> _dbSet;
        public BaseRepository(GenericDbContext dbContext)
        {
            _dbContext = dbContext;
            _dbSet = _dbContext.Set<TEntity>();
        }
        public IEnumerable<TEntity> GetAllData()
        {
            var result = _dbSet.ToList();
            return result;
        }
    }
}
