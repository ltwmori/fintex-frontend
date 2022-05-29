using System;
using Microsoft.EntityFrameworkCore;
using TraderApp.Entities;

namespace TraderApp.Helpers
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions<DataContext> options) : base(options)
		{
		}
		protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
			base.OnModelCreating(modelBuilder);
        }

		public DbSet<User> users { get; set; }
	}
}

