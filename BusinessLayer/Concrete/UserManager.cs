using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System.Collections.Generic;

namespace BusinessLayer.Concrete
{
    public class UserManager : IUserService
    {
        private readonly IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }

        public void Add(User user)
        {
            // Basit iş kuralı (sonra genişletilebilir)
            _userDal.Insert(user);
        }

        public void Update(User user)
        {
            _userDal.Update(user);
        }

        public void Delete(User user)
        {
            _userDal.Delete(user);
        }

        public User GetById(int id)
        {
            return _userDal.GetById(id);
        }

        public User GetByUserName(string userName)
        {
            return _userDal.GetByUserName(userName);
        }

        public List<User> GetAll()
        {
            return _userDal.GetAll();
        }
    }
}
