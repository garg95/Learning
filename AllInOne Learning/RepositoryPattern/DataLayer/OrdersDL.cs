using RepositoryPattern.DataLayer.InterfacesDL;
using RepositoryPattern.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RepositoryPattern.DataLayer
{
    public class OrdersDL : BaseRepository<Orders>, IOrdersDL
    {
        public OrdersDL(GenericDbContext dbContext) : base(dbContext)
        {
        }

        public Orders GetOrderById(int id)
        {
            return _dbContext.Orders.FirstOrDefault(x => x.OrderId == id);
        }
    }
}
