using System.ComponentModel.DataAnnotations;

namespace Locadora.Models;

public class Avaliacao
{   
    [Key]
    public int? Id {get; set;}
    private int _clienteId;
    private DateTime _dataCriacao;
    private int _classificacao;
    private string? _comentario;
    private int _pedidoId;

    public int ClienteId {
        get => _clienteId;
        set => _clienteId = value;
    }

    public DateTime DataCriacao {
        get => _dataCriacao;
        set => _dataCriacao = value;
    }

    public int Classificacao {
        get => _classificacao;
        set => _classificacao = value;
    }

    public string? Comentario {
        get => _comentario;
        set => _comentario = value;
    }

    public int PedidoId {
        get => _pedidoId;
        set => _pedidoId = value;
    }
}