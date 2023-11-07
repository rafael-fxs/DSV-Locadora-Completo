using System.ComponentModel.DataAnnotations;

namespace Locadora.Models;

public class Cliente
{
    [Key]
    public int Id { get; set; }
    public required string Nome { get; set; }
    public required string Telefone { get; set; }
    [MaxLength(11)]
    public required string CPF { get; set; }
    public string? Email { get; set; }
}