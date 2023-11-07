namespace Locadora.Models;

public class Pagamento
{
    public int Id { get; set; }
    public string NomeCliente { get; set; }
    public Decimal Valor { get; set; }
    public string TipoPagamento { get; set; }
    public DateTime DataPagamento { get; set; }
}
