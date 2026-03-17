using System;

namespace EntityLayer.Concrete
{
    public class UserLoginLog
    {
        public int Id { get; set; }
        public int UserId { get; set; }           // Hangi kullanıcı
        public DateTime LoginTime { get; set; }   // Giriş zamanı

        // Kullanıcıyla ilişki (Opsiyonel, navigation property)
        public User User { get; set; }
    }
}

