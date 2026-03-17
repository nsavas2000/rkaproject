using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// -------------------------
// Cookie Authentication
// -------------------------
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Login/Login";          // Giriþ yapýlmadýðýnda yönlenecek sayfa
        options.AccessDeniedPath = "/Login/AccessDenied"; // Yetkisiz eriþimde yönlendirilecek sayfa
        options.ExpireTimeSpan = TimeSpan.FromHours(1);   // Oturum süresi
        options.SlidingExpiration = true;                 // Her istekte süreyi uzat
    });

builder.Services.AddAuthorization();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// -------------------------
// Authentication & Authorization
// -------------------------
app.UseAuthentication();  // mutlaka UseAuthorization öncesinde olmalý
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Login}/{action=Login}/{id?}");

app.Run();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Login/StudentLogin"; // Öðrenciler için login sayfasý
        options.AccessDeniedPath = "/Login/AccessDenied";
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("StudentOnly", policy => policy.RequireRole("Student"));
});