using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Abstract
{
    public interface IStudentDal
    {
        // CRUD
        void Insert(Student student);
        void Update(Student student);
        void Delete(Student student);

        // Get
        Student GetById(int id);

        // 🔐 SAHİPLİK ODAKLI
        List<Student> GetAllByUserId(int userId);

        // Admin için (opsiyonel)
        List<Student> GetAll();
    }
}
