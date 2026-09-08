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
        HttpContext.Session.SetString("nombreJugador", nombre);
        if(BD.ExistePartidaEnCurso(nombre))
        {
            return View("DeseaContinuar");
        }
        return RedirectToAction("CrearPartida");
    }

    public IActionResult ContinuarPartida()
    {
        string nombreJugador = HttpContext.Session.GetString("nombreJugador");
        Partida partida = BD.ObtenerPartidaEnCurso(nombreJugador);
        HttpContext.Session.SetString("idPartida", partida.id.ToString());
        HttpContext.Session.SetString("idSala", partida.idSala.ToString());
        return View("Sala" + HttpContext.Session.GetString("idSala"));
    }

    public IActionResult ReescribirPartida()
    {
        BD.ReescribirPartida(HttpContext.Session.GetString("nombreJugador"));
        HttpContext.Session.SetString("idPartida", BD.ObtenerIdNuevaPartida().ToString());
        HttpContext.Session.SetString("idSala", "0");
        return RedirectToAction("AvanzarSala");
    }

    public IActionResult Dialogo()
    {
        return View();
    }

    public IActionResult Dialogo2()
    {
        return View();
    }

    public IActionResult CrearPartida()
    {
        BD.CrearJugador(HttpContext.Session.GetString("nombreJugador"));
        BD.CrearPartida("En curso", "0", HttpContext.Session.GetString("nombreJugador"));
        HttpContext.Session.SetString("idPartida", BD.ObtenerIdNuevaPartida().ToString());
        HttpContext.Session.SetString("idSala", "0");
        return RedirectToAction("Dialogo");
    }

    public IActionResult AvanzarSala(){
        
        int idSala = int.Parse(HttpContext.Session.GetString("idSala"));
        HttpContext.Session.SetString("idSala", (idSala + 1).ToString());
        BD.AvanzarSala(HttpContext.Session.GetString("idPartida"), HttpContext.Session.GetString("idSala"));
        return View("Sala" + HttpContext.Session.GetString("idSala"));
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
