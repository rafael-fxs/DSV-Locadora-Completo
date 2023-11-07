using System.ComponentModel.DataAnnotations;

namespace Locadora.Models;

public class Avaliacao
{   
    [Key]
    public int Id {get; set;}
    private int _clienteId;
    private DateTime _dataCriacao;
    private int _classificaco;
    private string _comentario;
    private int _pedidoId;

    public Avaliacao(int clienteId, DateTime dataCriacao, int classificacao, string comentario)
    {
        _clienteId = clienteId;
        _dataCriacao = dataCriacao;
        _classificaco = classificacao;
        _comentario = comentario;
    }

    public int ClienteId {
        get => _clienteId;
        set => _clienteId = value;
    }

    public DateTime DataCriacao {
        get => _dataCriacao;
        set => _dataCriacao = value;
    }

    public int Classificacao {
        get => _classificaco;
        set => _classificaco = value;
    }

    public string Comentario {
        get => _comentario;
        set => _comentario = value;
    }

    public int PedidoId {
        get => _pedidoId;
        set => _pedidoId = value;
    }
}