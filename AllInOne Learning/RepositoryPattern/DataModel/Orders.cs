using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace RepositoryPattern.DataModel
{
    //[Table("Orders")]
    public class Orders
    {
        [Key]
        [Column("OrderId")]
        public int Id { get; set; }
        public string OrderName { get; set; }
        public int CustomerId { get; set; }
    }
}
