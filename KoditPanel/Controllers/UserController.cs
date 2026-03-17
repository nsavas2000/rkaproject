using BusinessLayer.Concrete;
using DataAccessLayer.Concrete;
using DataAccessLayer.EntityFramework;
using EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;

namespace KoditPanel.Controllers
{
    [Authorize]
    public class UserController : Controller
    {
        private readonly UserManager _userManager =
            new UserManager(new EfUserRepository());

        private readonly StudentManager _studentManager =
            new StudentManager(new EfStudentRepository());

        // =================================================
        // =================== ADMIN =======================
        // =================================================

        // /User/Index → Admin Dashboard
        [Authorize(Roles = "Admin")]
        public IActionResult Index()
        {
            var users = _userManager.GetAll();
            return View("Index", users);
        }

        // /User/Users → Kullanıcı listesi
        [Authorize(Roles = "Admin")]
        public IActionResult Users()
        {
            var users = _userManager.GetAll();
            return View("Users", users);
        }

        // Kullanıcı Ekle - GET
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult AddUser()
        {
            return View();
        }

        // Kullanıcı Ekle - POST
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult AddUser(User user)
        {
            if (!ModelState.IsValid)
                return View(user);

            user.LastLogin = DateTime.Now;
            user.IsAdmin = false;

            _userManager.Add(user);
            return RedirectToAction("Users");
        }

        // Kullanıcı Sil
        [Authorize(Roles = "Admin")]
        public IActionResult DeleteUser(int id)
        {
            var user = _userManager.GetById(id);
            if (user != null)
                _userManager.Delete(user);

            return RedirectToAction("Users");
        }

        // Kullanıcı Düzenle - GET
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public IActionResult EditUser(int id)
        {
            var user = _userManager.GetById(id);
            if (user == null)
                return NotFound();

            return View(user);
        }

        // Kullanıcı Düzenle - POST
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public IActionResult EditUser(User user)
        {
            if (!ModelState.IsValid)
                return View(user);

            user.IsAdmin = false;
            _userManager.Update(user);

            return RedirectToAction("Users");
        }

        // Kullanıcı Login Logları
        [Authorize(Roles = "Admin")]
        public IActionResult LoginLogs(int id)
        {
            using var context = new Context();

            var user = _userManager.GetById(id);
            if (user == null)
                return NotFound();

            var logs = context.UserLoginLogs
                              .Where(x => x.UserId == id)
                              .OrderByDescending(x => x.LoginTime)
                              .ToList();

            ViewBag.User = user;
            return View(logs);
        }

        // =================================================
        // ================== TEACHER =====================
        // =================================================

        // /User/TeacherIndex → Teacher öğrenci listesi
        [Authorize(Roles = "User")]
        public IActionResult TeacherIndex()
        {
            int teacherId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var students = _studentManager.GetAllByUserId(teacherId);
            return View("TeacherIndex", students);
        }

        // Öğrenci Ekle - GET
        [Authorize(Roles = "User")]
        [HttpGet]
        public IActionResult AddStudent()
        {
            return View();
        }

        // Öğrenci Ekle - POST
        [Authorize(Roles = "User")]
        [HttpPost]
        public IActionResult AddStudent(Student student)
        {
            if (!ModelState.IsValid)
                return View(student);

            int teacherId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier).Value);

            student.UserId = teacherId;
            _studentManager.Add(student);

            return RedirectToAction("TeacherIndex");
        }

        // Öğrenci Düzenle - GET
        [Authorize(Roles = "User")]
        [HttpGet]
        public IActionResult EditStudent(int id)
        {
            int teacherId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var student = _studentManager.GetById(id);

            if (student == null || student.UserId != teacherId)
                return Unauthorized();

            return View(student);
        }

        // Öğrenci Düzenle - POST
        [Authorize(Roles = "User")]
        [HttpPost]
        public IActionResult EditStudent(Student student)
        {
            int teacherId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (student.UserId != teacherId)
                return Unauthorized();

            _studentManager.Update(student);
            return RedirectToAction("TeacherIndex");
        }

        // Öğrenci Sil
        [Authorize(Roles = "User")]
        public IActionResult DeleteStudent(int id)
        {
            int teacherId = int.Parse(
                User.FindFirst(ClaimTypes.NameIdentifier).Value);

            var student = _studentManager.GetById(id);

            if (student == null || student.UserId != teacherId)
                return Unauthorized();

            _studentManager.Delete(student);
            return RedirectToAction("TeacherIndex");
        }
    }
}
