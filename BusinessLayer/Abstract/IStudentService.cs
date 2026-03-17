using EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Abstract
{
    public interface IStudentService
    {
        // User işlemleri
        void Add(Student student);
        void Update(Student student);
        void Delete(Student student);

        // Get işlemleri
        Student GetById(int id);

        // 🔐 Sadece kullanıcının öğrencileri
        List<Student> GetAllByUserId(int userId);

        // 👑 Admin (opsiyonel)
        List<Student> GetAll();
    }

}
