using System.ComponentModel.DataAnnotations;

namespace Locadora.Models;

public class Funcionario
{
    [Key]
    [MaxLength(11)]
    public required string CPF { get; set; }

    public required string Nome { get; set; }

    public required string Cargo { get; set; }

    public decimal Salario { get; set; }

    public required string NumeroTelefone { get; set; }
}