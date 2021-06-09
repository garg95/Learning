using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryPattern.DataModel
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedOn { get; set; }
        public virtual IEnumerable<Orders> Orders { get; set; }
    }
}
