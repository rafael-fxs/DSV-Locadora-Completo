public class Pedido
{
    public int Id { get; set; }
    public string NomeProduto { get; set; }
    public int Quantidade { get; set; }
    public decimal ValorTotal { get; set; }

    public Pedido(int id, string nomeProduto, int quantidade)
    {
        Id = id;
        NomeProduto = nomeProduto;
        Quantidade = quantidade;

    }
}