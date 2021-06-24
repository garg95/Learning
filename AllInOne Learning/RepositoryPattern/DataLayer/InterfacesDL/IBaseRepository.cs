using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryPattern
{
    public interface IBaseRepository<TEntity> where TEntity:class
    {
        IEnumerable<TEntity> GetAllData();
        void Add(TEntity entity);
        void Update(TEntity entity);
    }
}
