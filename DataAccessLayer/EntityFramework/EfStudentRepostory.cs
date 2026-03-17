using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using EntityLayer.Concrete;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer.EntityFramework
{
    public class EfStudentRepository : IStudentDal
    {
        public void Insert(Student student)
        {
            using var context = new Context();
            context.Students.Add(student);
            context.SaveChanges();
        }

        public void Update(Student student)
        {
            using var context = new Context();
            context.Students.Update(student);
            context.SaveChanges();
        }

        public void Delete(Student student)
        {
            using var context = new Context();
            context.Students.Remove(student);
            context.SaveChanges();
        }

        public Student GetById(int id)
        {
            using var context = new Context();
            return context.Students.Find(id);
        }

        // 🔐 User sadece kendi öğrencilerini görür
        public List<Student> GetAllByUserId(int userId)
        {
            using var context = new Context();
            return context.Students
                          .Where(s => s.UserId == userId)
                          .ToList();
        }

        // 👑 Admin için
        public List<Student> GetAll()
        {
            using var context = new Context();
            return context.Students.ToList();
        }
    }
}
