using Microsoft.AspNetCore.Mvc;

namespace Server.Controllers;

[ApiController]
[Route("/")]
public class MainController : Controller
{
	[HttpGet(Name = "Main View")]
	public IActionResult Index()
	{
		return Json(new { Message = "I'm Alive!" });
	}
}
