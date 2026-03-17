using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System;
using System.Linq;
using System.Collections.Generic;

namespace KoditPanel.Controllers
{
    [AllowAnonymous]
    public class LoginController : Controller
    {
        private readonly UserManager _userManager =
            new UserManager(new EfUserRepository());

        // =========================
        // GET: /Login/Login
        // =========================
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        // =========================
        // POST: /Login/Login
        // =========================
        [HttpPost]
        public IActionResult Login(string username, string password)
        {
            var user = _userManager.GetAll()
                .FirstOrDefault(x => x.UserName == username && x.Password == password);

            if (user == null)
            {
                ViewBag.Error = "Kullanıcı adı veya şifre hatalı!";
                return View();
            }

            // -----------------------------
            // Login log kaydı
            // -----------------------------
            using (var context = new Context())
            {
                context.UserLoginLogs.Add(new UserLoginLog
                {
                    UserId = user.Id,
                    LoginTime = DateTime.Now
                });
                context.SaveChanges();
            }

            // -----------------------------
            // Claims (ÇOK ÖNEMLİ)
            // -----------------------------
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()), // 🔥 ZORUNLU
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role, user.IsAdmin ? "Admin" : "User")
            };

            var identity = new ClaimsIdentity(
                claims,
                CookieAuthenticationDefaults.AuthenticationScheme);

            var principal = new ClaimsPrincipal(identity);

            HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                principal);

            // -----------------------------
            // Yönlendirme
            // -----------------------------
            if (user.IsAdmin)
                return RedirectToAction("Index", "User");          // Admin Panel
            else
                return RedirectToAction("TeacherIndex", "User");   // Teacher Panel
        }

        // =========================
        // POST: /Login/Logout
        // =========================
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Logout()
        {
            HttpContext.SignOutAsync(
                CookieAuthenticationDefaults.AuthenticationScheme);

            return RedirectToAction("Login", "Login");
        }

        // =========================
        // Yetkisiz Erişim
        // =========================
        [HttpGet]
        public IActionResult AccessDenied()
        {
            return View();
        }


        [HttpGet]
        [AllowAnonymous]
        public IActionResult StudentLogin()
        {
            return View(); // Views/Login/StudentLogin.cshtml
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> StudentLogin(string username, string password)
        {
            var studentManager = new StudentManager(new EfStudentRepository());

            var student = studentManager.GetAll()
                                        .FirstOrDefault(s => s.UserName == username && s.Password == password);

            if (student == null)
            {
                ViewBag.Error = "Kullanıcı adı veya şifre hatalı!";
                return View();
            }

            // Cookie oluştur
            var claims = new List<Claim>
    {
        new Claim(ClaimTypes.Name, student.UserName),
        new Claim(ClaimTypes.Role, "Student"),
        new Claim("StudentId", student.Id.ToString()) // opsiyonel, ID'yi tutmak için
    };

            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var principal = new ClaimsPrincipal(identity);

            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);

            // Başarılı login sonrası yönlendirme
            return RedirectToAction("Index", "Student");
        }


    }
}
