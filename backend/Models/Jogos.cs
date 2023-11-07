namespace Locadora.Models;

public class Jogos
{
    public int Id { get; set; }
    private string _titulo;
    private string _descricao;
    private string _genero;
    private float _preco;

    public string titulo
    {
        get => _titulo;
        set => _titulo = value;
    }
    public string descricao
    {
        get => _descricao;
        set => _descricao = value;
    }
    public string genero
    {
        get => _genero;
        set => _genero = value;
    }
    public float preco
    {
        get => _preco;
        set => _preco = value;
    }

    public Jogos()
    {
        _titulo = string.Empty;
        _descricao = string.Empty;
        _genero = string.Empty;
        _preco = 0.0f;
    }

    public Jogos(string titulo, string descricao, string genero, float preco)
    {
        _titulo = titulo;
        _descricao = descricao;
        _genero = genero;
        _preco = preco;
    }
}