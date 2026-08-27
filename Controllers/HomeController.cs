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
        if(BD.ExistePartidaEnCurso(nombre))
        {
            return View("DeseaContinuar");
        }
        return RedirectToAction("CrearPartida");
    }

    public IActionResult ReescribirPartida()
    {
        BD.ReescribirPartida(httpContext.Session.GetString("nombreJugador"));
        httpContext.Session.SetString("idPartida", BD.ObtenerIdNuevaPartida().ToString());
        httpContext.Session.SetString("idSala", "0");
        return RedirectToAction("AvanzarSala");
    }

    public IActionResult CrearPartida()
    {
        BD.CrearJugador(httpContext.Session.GetString("nombreJugador"));
        BD.CrearPartida(httpContext.Session.GetString("nombreJugador"));
        httpContext.Session.SetString("idPartida", BD.ObtenerIdNuevaPartida().ToString());
        httpContext.Session.SetString("idSala", "0");
        return RedirectToAction("AvanzarSala");
    }

    public IActionResult AvanzarSala(){
        
        int idSala = int.Parse(httpContext.Session.GetString("idSala"));
        httpContext.Session.SetString("idSala", (idSala + 1).ToString());
        BD.AvanzarSala(httpContext.Session.GetString("idPartida"), httpContext.Session.GetString("idSala"));
        return View("Sala" + httpContext.Session.GetString("idSala"));
    }

    public IActionResult PartidaGanada()
    {
        return View();

    }

    public IActionResult PartidaPerdida()
    {
        return View();

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
