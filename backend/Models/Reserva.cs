public class Reserva
{
    public int? Id { get; set; }
    public string NomeCliente { get; set; }
    public DateTime DataReserva { get; set; }

    public Reserva(int? id, string nomeCliente, DateTime dataReserva)
    {
        Id = id;
        NomeCliente = nomeCliente;
        DataReserva = dataReserva;
    }
}