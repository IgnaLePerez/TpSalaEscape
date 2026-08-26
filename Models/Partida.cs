namespace tpSalaDeEscape.Models
{
    public class Partida
    {
        public int id { get; set; }

        public string estado { get; set; }

        public DateTime fechaHoraInicio { get; set; }

        public int idSala { get; set; }

        public int idJugador { get; set; }

    }
}
