using System.ComponentModel.DataAnnotations;
namespace Locadora.Models;

public class Endereco
{
     [Key]
    public int? Id {get; set;}
    private int _clienteId;
    private string? _rua;
    private int _numero;
    private string? _bairro;
    private string? _cidade;
    private string? _estado;
    private string? _complemento;
    private int _cep;
    public int ClienteId
    {
        get => _clienteId;
        set => _clienteId = value;
    }

    public string? Rua
    {
        get => _rua;
        set => _rua = value;
    }

    public int Numero
    {
        get => _numero;
        set => _numero = value;
    }

    public string? Bairro
    {
        get => _bairro;
        set => _bairro = value;
    }

    public string? Cidade
    {
        get => _cidade;
        set => _cidade = value;
    }

    public string? Estado
    {
        get => _estado;
        set => _estado = value;
    }

    public string? Complemento
    {
        get => _complemento;
        set => _complemento = value;
    }

    public int CEP
    {
        get => _cep;
        set => _cep = value;
    }
}
