using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Concrete
{
    public class Context : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=127.0.0.1,1433; 
                  Database=RobKodAkdDB; 
                  User Id=SA; 
                  Password=Bee992260.");
        }

        // -------------------------
        // TABLOLAR
        // -------------------------
        public DbSet<User> Users { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<UserLoginLog> UserLoginLogs { get; set; }

        // -------------------------
        // İLİŞKİLER
        // -------------------------
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // User -> Student (One to Many)
            modelBuilder.Entity<Student>()
                .HasOne(s => s.User)
                .WithMany(u => u.Students)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(modelBuilder);
        }
    }
}
