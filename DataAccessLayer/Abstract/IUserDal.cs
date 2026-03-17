using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EntityLayer.Concrete;
using System.Collections.Generic;

namespace DataAccessLayer.Abstract
{
    public interface IUserDal
    {
        // CRUD
        void Insert(User user);
        void Update(User user);
        void Delete(User user);

        // Get
        User GetById(int id);
        User GetByUserName(string userName);
        List<User> GetAll();
    }
}

