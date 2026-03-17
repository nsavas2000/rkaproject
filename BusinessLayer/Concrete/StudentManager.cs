using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using EntityLayer.Concrete;
using System.Collections.Generic;

namespace BusinessLayer.Concrete
{
    public class StudentManager : IStudentService
    {
        private readonly IStudentDal _studentDal;

        public StudentManager(IStudentDal studentDal)
        {
            _studentDal = studentDal;
        }

        public void Add(Student student)
        {
            // 🔐 Sahiplik kontrolü
            if (student.UserId <= 0)
                throw new System.Exception("Student mutlaka bir User'a bağlı olmalıdır.");

            _studentDal.Insert(student);
        }

        public void Update(Student student)
        {
            _studentDal.Update(student);
        }

        public void Delete(Student student)
        {
            _studentDal.Delete(student);
        }

        public Student GetById(int id)
        {
            return _studentDal.GetById(id);
        }

        // 🔐 USER → sadece kendi öğrencileri
        public List<Student> GetAllByUserId(int userId)
        {
            return _studentDal.GetAllByUserId(userId);
        }

        // 👑 ADMIN → tüm öğrenciler
        public List<Student> GetAll()
        {
            return _studentDal.GetAll();
        }
    }
}
