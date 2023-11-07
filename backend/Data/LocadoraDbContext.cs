using Locadora.Models;
using Microsoft.EntityFrameworkCore;

namespace Locadora.Data;
public class LocadoraDbContext : DbContext
{
    public DbSet<Endereco>? Endereco { get; set; }
    public DbSet<Avaliacao>? Avaliacao { get; set; }
    public DbSet<AssinaturaPlano>? Assinaturas { get; set; }
    public DbSet<Fornecedor>? Fornecedores { get; set; }
    public DbSet<Filmes>? Filmes { get; set; }
    public DbSet<Jogos>? Jogos { get; set; }
    public DbSet<Pagamento> Pagamentos { get; set; }
    public DbSet<Locacao> Locacoes { get; set; }
    public DbSet<Cliente> Cliente { get; set; }
    public DbSet<Funcionario> Funcionario { get; set; }
    public DbSet<Pedido> Pedido { get; set; }
    public DbSet<Reserva> Reserva { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("DataSource=locadora.db;Cache=Shared");
    }
}