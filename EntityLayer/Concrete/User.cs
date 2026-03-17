using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Concrete
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string NameSurname { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public bool IsAdmin { get; set; } = false;
        public DateTime? LastLogin { get; set; }

        // 🔗 Bir User'ın birden fazla öğrencisi olabilir
        public ICollection<Student> Students { get; set; }
    }
}
