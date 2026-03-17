using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using EntityLayer.Concrete;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer.EntityFramework
{
    public class EfUserRepository : IUserDal
    {
        public void Insert(User user)
        {
            using var context = new Context();
            context.Users.Add(user);
            context.SaveChanges();
        }

        public void Update(User user)
        {
            using var context = new Context();
            context.Users.Update(user);
            context.SaveChanges();
        }

        public void Delete(User user)
        {
            using var context = new Context();
            context.Users.Remove(user);
            context.SaveChanges();
        }

        public User GetById(int id)
        {
            using var context = new Context();
            return context.Users.Find(id);
        }

        public User GetByUserName(string userName)
        {
            using var context = new Context();
            return context.Users.FirstOrDefault(x => x.UserName == userName);
        }

        public List<User> GetAll()
        {
            using var context = new Context();
            return context.Users.ToList();
        }
    }
}
