using System;
using System.ComponentModel.DataAnnotations;
public class Fornecedor
{
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Nome { get; set; }

    [Required]
    [StringLength(14)]
    public string CNPJ { get; set; }



    public Fornecedor() { }

    public Fornecedor(int id, string nome, string cnpj)
    {
        Id = id;
        Nome = nome;
        CNPJ = cnpj;
    }
}

public class FornecedorService
{
    private List<Fornecedor> _fornecedores = new List<Fornecedor>();

    public Fornecedor CadastrarFornecedor(Fornecedor fornecedor)
    {
        fornecedor.Id = _fornecedores.Count + 1;
        _fornecedores.Add(fornecedor);
        return fornecedor;
    }

    public IEnumerable<Fornecedor> ListarFornecedores()
    {
        return _fornecedores;
    }

    public Fornecedor ObterFornecedorPorId(int id)
    {
        return _fornecedores.FirstOrDefault(f => f.Id == id);
    }

    public Fornecedor AtualizarFornecedor(int id, Fornecedor fornecedor)
    {
        var existingFornecedor = _fornecedores.FirstOrDefault(f => f.Id == id);
        if (existingFornecedor != null)
        {
            existingFornecedor.Nome = fornecedor.Nome;
            existingFornecedor.CNPJ = fornecedor.CNPJ;

        }
        return existingFornecedor;
    }

    public bool ExcluirFornecedor(int id)
    {
        var fornecedor = _fornecedores.FirstOrDefault(f => f.Id == id);
        if (fornecedor != null)
        {
            _fornecedores.Remove(fornecedor);
            return true;
        }
        return false;
    }
}