using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using tpSalaDeEscape.Models;

namespace tpSalaDeEscape.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Integrantes()
    {
        return View();
    }

    public IActionResult Historia()
    {
        return View();
    }

    public IActionResult IngresarNombre()
    {
        return View();
    }

    public IActionResult IngresarNombrePost(string nombre)
    {
        httpContext.Session.SetString("nombreJugador", nombre);
        if(bd.ExistePartidaEnCurso(nombre))
        {
            return View("DeseaContinuar");
        }
        bd.CrearJugador(nombre);
        bd.CrearPartida(nombre);
        httpContext.Session.SetString("idPartida", bd.ObtenerIdNuevaPartida().ToString());
        httpContext.Session.SetString("idSala", "0");
        return RedirectToAction("AvanzarSala");
    }

    public IActionResult ReescribirPartida()
    {
        bd.ReescribirPartida(httpContext.Session.GetString("nombreJugador"));
        httpContext.Session.SetString("idPartida", bd.ObtenerIdNuevaPartida().ToString());
        httpContext.Session.SetString("idSala", "0");
        return RedirectToAction("Index");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
