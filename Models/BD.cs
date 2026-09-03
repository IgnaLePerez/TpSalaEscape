// clase BD.cs sin atributos. Solo con métodos estaticos vacíos (AvanzarSala, CrearJugador, CrearPartida, ExistePartidaEnCurso, ObtenerIdNuevaPartida, ReescribirPartida)
using System.Data.SqlClient;
using Dapper;


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
            string query = "INSERT INTO Jugadores (nombre) VALUES (@Nombre)"
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new { Nombre = nombre });
            }
        }

        public void CrearPartida(string estado, string idSala, string nombreJugador)
        {
            string query = "INSERT INTO Partidas (estado, idSala, idJugador) VALUES (@estado, @idSala, (SELECT id FROM Jugadores WHERE nombre = @nombreJugador))";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new { Estado = estado, IdSala = idSala, NombreJugador = nombreJugador });
            }
        }

        public bool ExistePartidaEnCurso(string nombre)
        {
            int count;
            string query =  "SELECT COUNT(*) FROM Partidas p INNER JOIN Jugadores j ON p.idJugador = j.id WHERE j.nombre = @Nombre AND p.estado = 'En curso'";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                count = connection.QueryFirstOrDefault<int>(query, new { Nombre = nombre });
            }

            if (count == 0)
                return false;
            return true;
        }

        public int ObtenerIdNuevaPartida()
        {
            string query = "SELECT id FROM Partidas ORDER BY id DESC";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                return connection.QueryFirstOrDefault<int>(query) + 1;
            }
        }

        public void ReescribirPartida(string nombre)
        {
            string query = "UPDATE Partidas SET estado = 'En curso', idSala = 0 WHERE idJugador = (SELECT id FROM Jugadores WHERE nombre = @Nombre)";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new { Nombre = nombre });
            }
        }
    }
}
