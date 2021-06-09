using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using RepositoryPattern.DataModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace RepositoryPattern
{
    public class GenericDbContext : DbContext 
    {
        public GenericDbContext(DbContextOptions<GenericDbContext> options): base(options)
        { }
        

        public DbSet<Customer> Customer { get; set; }
        public DbSet<Orders> Orders { get; set; }

    }
}
