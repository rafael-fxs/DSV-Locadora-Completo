using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Locadora.Migrations
{
    /// <inheritdoc />
    public partial class atualizacao1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Assinaturas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeAssinante = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    PlanoId = table.Column<int>(type: "INTEGER", nullable: false),
                    DataInicio = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataFim = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Assinaturas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Avaliacao",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClienteId = table.Column<int>(type: "INTEGER", nullable: false),
                    DataCriacao = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Classificacao = table.Column<int>(type: "INTEGER", nullable: false),
                    Comentario = table.Column<string>(type: "TEXT", nullable: false),
                    PedidoId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Avaliacao", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Cliente",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Telefone = table.Column<string>(type: "TEXT", nullable: false),
                    CPF = table.Column<string>(type: "TEXT", maxLength: 11, nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cliente", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Endereco",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClienteId = table.Column<int>(type: "INTEGER", nullable: false),
                    Rua = table.Column<string>(type: "TEXT", nullable: true),
                    Numero = table.Column<int>(type: "INTEGER", nullable: false),
                    Bairro = table.Column<string>(type: "TEXT", nullable: true),
                    Cidade = table.Column<string>(type: "TEXT", nullable: true),
                    Estado = table.Column<string>(type: "TEXT", nullable: true),
                    Complemento = table.Column<string>(type: "TEXT", nullable: true),
                    CEP = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Endereco", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Filmes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    titulo = table.Column<string>(type: "TEXT", nullable: false),
                    descricao = table.Column<string>(type: "TEXT", nullable: false),
                    genero = table.Column<string>(type: "TEXT", nullable: false),
                    preco = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Filmes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Fornecedores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    CNPJ = table.Column<string>(type: "TEXT", maxLength: 14, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fornecedores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Funcionario",
                columns: table => new
                {
                    CPF = table.Column<string>(type: "TEXT", maxLength: 11, nullable: false),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Cargo = table.Column<string>(type: "TEXT", nullable: false),
                    Salario = table.Column<decimal>(type: "TEXT", nullable: false),
                    NumeroTelefone = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionario", x => x.CPF);
                });

            migrationBuilder.CreateTable(
                name: "Jogos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    titulo = table.Column<string>(type: "TEXT", nullable: false),
                    descricao = table.Column<string>(type: "TEXT", nullable: false),
                    genero = table.Column<string>(type: "TEXT", nullable: false),
                    preco = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jogos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Locacoes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeCliente = table.Column<string>(type: "TEXT", nullable: false),
                    Titulo = table.Column<string>(type: "TEXT", nullable: false),
                    DataLocacao = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locacoes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pagamentos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeCliente = table.Column<string>(type: "TEXT", nullable: false),
                    Valor = table.Column<decimal>(type: "TEXT", nullable: false),
                    TipoPagamento = table.Column<string>(type: "TEXT", nullable: false),
                    DataPagamento = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pagamentos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pedido",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeProduto = table.Column<string>(type: "TEXT", nullable: false),
                    Quantidade = table.Column<int>(type: "INTEGER", nullable: false),
                    ValorTotal = table.Column<decimal>(type: "TEXT", nullable: false),
                    ClienteId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pedido", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reserva",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NomeCliente = table.Column<string>(type: "TEXT", nullable: false),
                    DataReserva = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reserva", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Assinaturas");

            migrationBuilder.DropTable(
                name: "Avaliacao");

            migrationBuilder.DropTable(
                name: "Cliente");

            migrationBuilder.DropTable(
                name: "Endereco");

            migrationBuilder.DropTable(
                name: "Filmes");

            migrationBuilder.DropTable(
                name: "Fornecedores");

            migrationBuilder.DropTable(
                name: "Funcionario");

            migrationBuilder.DropTable(
                name: "Jogos");

            migrationBuilder.DropTable(
                name: "Locacoes");

            migrationBuilder.DropTable(
                name: "Pagamentos");

            migrationBuilder.DropTable(
                name: "Pedido");

            migrationBuilder.DropTable(
                name: "Reserva");
        }
    }
}
