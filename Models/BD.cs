// clase BD.cs sin atributos. Solo con métodos estaticos vacíos (AvanzarSala, CrearJugador, CrearPartida, ExistePartidaEnCurso, ObtenerIdNuevaPartida, ReescribirPartida)

namespace tpSalaDeEscape.Models
{
    public static class BD
    {
        private string _connectionString = @"Server=localhost; DataBase=tpSessions;Integrated Security=True;TrustServerCertificate=True;";

        public void AvanzarSala(string idPartida, string idSala)
        {
            string query = "UPDATE Usuarios SET idSala = @IdSala WHERE idPartida = @IdPartida";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new { IdSala = idSala, IdPartida = idPartida });
            }
        }

        public void CrearJugador(string nombre)
        {
            // Método vacío
        }

        public void CrearPartida(string nombre)
        {
            // Método vacío
        }

        public bool ExistePartidaEnCurso(string nombre)
        {
            // Método vacío
            return false;
        }

        public int ObtenerIdNuevaPartida()
        {
            // Método vacío
            return 0;
        }

        public void ReescribirPartida(string nombre)
        {
            // Método vacío
        }
    }
}