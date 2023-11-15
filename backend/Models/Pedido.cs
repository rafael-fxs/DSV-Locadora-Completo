public class Pedido
{
    public int? Id { get; set; }
    public string NomeProduto { get; set; }
    public int Quantidade { get; set; }
    public decimal ValorTotal { get; set; }

    public int ClienteId { get; set; }

    public Pedido(int? id, int clienteId, string nomeProduto, int quantidade)
    {
        Id = id;
        ClienteId = clienteId;
        NomeProduto = nomeProduto;
        Quantidade = quantidade;
    }
}