using RepositoryPattern.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryPattern.DataLayer.InterfacesDL
{
    public interface IOrdersDL
    {
        Orders GetOrderById(int id);
    }
}
