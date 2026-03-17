using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace KoditPanel.Controllers
{
    [Authorize(Roles = "Admin")] // 🔒 sadece admin rolündeki kullanıcılar
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
