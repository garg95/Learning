using RepositoryPattern.DataLayer.InterfacesDL;
using RepositoryPattern.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryPattern.DataLayer
{
    public class RequestDL : BaseRepository<Request>, IRequestDL
    {
        public RequestDL(GenericDbContext dbContext) : base(dbContext)
        {
        }

        
    }
}
