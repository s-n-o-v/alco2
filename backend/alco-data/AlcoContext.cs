using alco_model.Models;
using Microsoft.EntityFrameworkCore;

namespace alco_data
{
    public class AlcoContext : DbContext
    {
        public AlcoContext(DbContextOptions<AlcoContext> options) : base(options) { }

        public DbSet<Comment> Comments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Drink> Drinks { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().Property(u => u.Login).IsRequired();
            modelBuilder.Entity<User>().Property(u => u.Password).IsRequired();
        }
    }
}
