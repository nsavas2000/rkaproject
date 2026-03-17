using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        // 👤 Öğrenci Bilgileri
        public string NameSurname { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ClassName { get; set; }

        // 🔐 Sahiplik (Hangi User ekledi)
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }

}
