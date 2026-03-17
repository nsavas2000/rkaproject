using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EntityLayer.Concrete;
using System.Collections.Generic;

namespace BusinessLayer.Abstract
{
    public interface IUserService
    {
        // Admin işlemleri
        void Add(User user);
        void Update(User user);
        void Delete(User user);

        // Get işlemleri
        User GetById(int id);
        User GetByUserName(string userName);
        List<User> GetAll();
    }
}

