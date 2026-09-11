// clase BD.cs sin atributos. Solo con métodos estaticos vacíos (AvanzarSala, CrearJugador, CrearPartida, ExistePartidaEnCurso, ObtenerIdNuevaPartida, ReescribirPartida)
using Microsoft.Data.SqlClient;
using Dapper;


namespace tpSalaDeEscape.Models
{
    public static class BD
    {
        private static string _connectionString = @"Server=localhost;DataBase=SalaDeEscape;Integrated Security=True;TrustServerCertificate=True;";

        public static void AvanzarSala(string idPartida, int idSala)
        {
            string query = "UPDATE Partidas SET idSala = @IdSala WHERE id = @IdPartida";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new {IdSala = idSala, IdPartida = idPartida});
            }
        }

        public static void CrearJugador(string nombre)
        {
            string query = "INSERT INTO Jugadores (nombre) VALUES (@Nombre)";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new { Nombre = nombre });
            }
        }

        public static void CrearPartida(string estado, string idSala, string nombreJugador)
        {
            string query = "INSERT INTO Partidas (estado, idSala, idJugador) VALUES (@estado, @idSala, (SELECT id FROM Jugadores WHERE nombre = @nombreJugador))";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new { Estado = estado, IdSala = idSala, NombreJugador = nombreJugador });
            }
        }

        public static bool ExistePartidaEnCurso(string nombre)
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

        public static int ObtenerIdNuevaPartida()
        {
            string query = "SELECT id FROM Partidas ORDER BY id DESC";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                return connection.QueryFirstOrDefault<int>(query) + 1;
            }
        }

        public static void ReescribirPartida(string nombre)
        {
            string query = "UPDATE Partidas SET estado = 'En curso', idSala = 0 WHERE idJugador = (SELECT id FROM Jugadores WHERE nombre = @Nombre)";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                connection.Execute(query, new { Nombre = nombre });
            }
        }

        public static Partida ObtenerPartidaEnCurso(string nombre)
        {
            string query = "SELECT id, estado, idSala, idJugador FROM Partidas WHERE estado = 'En curso' AND idJugador = (SELECT id FROM Jugadores WHERE nombre = @Nombre)";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                return connection.QueryFirstOrDefault<Partida>(query, new { Nombre = nombre });
            }
        }
    }
}
