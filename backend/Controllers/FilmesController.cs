using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Locadora.Data;
using Locadora.Models;

namespace MinhaAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmesController : ControllerBase
    {
        private LocadoraDbContext _dbContext;

        // Construtor do controller, recebe o contexto do banco de dados
        public FilmesController(LocadoraDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Método para cadastrar um filme
        [HttpPost]
        [Route("cadastrar")]
        public async Task<IActionResult> Cadastrar(Filmes filmes)
        {
            if (filmes is null || string.IsNullOrWhiteSpace(filmes.titulo))
            {
                return BadRequest("Dados de filme inválidos."); //  validação de entrada
            }

            await _dbContext.AddAsync(filmes);
            await _dbContext.SaveChangesAsync();
            return Created("", filmes);
        }

        // Método para listar todos os filmes
        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Filmes>>> Listar()
        {
            return await _dbContext.Filmes.ToListAsync();
        }

        // Método para buscar um filme pelo título
        [HttpGet]
        [Route("buscar/{titulo}")]
        public async Task<ActionResult<Filmes>> Buscar(string titulo)
        {
            var FilmeTemp = await _dbContext.Filmes
            .FirstOrDefaultAsync(f => f.titulo == titulo);

            if (FilmeTemp is null)
            {
                return NotFound("Filme não encontrado."); //  tratamento de erro
            }

            return FilmeTemp;
        }

        // Método para alterar informações de um filme
        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Filmes filmes)
        {
            if (filmes is null || string.IsNullOrWhiteSpace(filmes.titulo))
            {
                return BadRequest("Dados de filme inválidos."); //  validação de entrada
            }

            var filmeTemp = await _dbContext.Filmes
            .FirstOrDefaultAsync(f => f.titulo == filmes.titulo);

            if (filmeTemp is null)
            {
                return NotFound("Filme não encontrado."); //  tratamento de erro
            }

            _dbContext.Filmes.Update(filmes);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        // Método para mudar a descrição de um filme
        [HttpPatch]
        [Route("mudardescricao/{titulo}")]
        public async Task<ActionResult> MudarDescricao(string titulo, string descricao)
        {
            if (string.IsNullOrWhiteSpace(titulo) || string.IsNullOrWhiteSpace(descricao))
            {
                return BadRequest("Dados inválidos."); //  validação de entrada
            }

            var filmeTemp = await _dbContext.Filmes
            .FirstOrDefaultAsync(f => f.titulo == titulo);


            if (filmeTemp is null)
            {
                return NotFound("Filme não encontrado."); //  tratamento de erro
            }

            filmeTemp.descricao = descricao;
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        // Método para excluir um filme pelo título
        [HttpDelete]
        [Route("excluir/{titulo}")]
        public async Task<ActionResult> Excluir(string titulo)
        {
            if (string.IsNullOrWhiteSpace(titulo))
            {
                return BadRequest("Título inválido."); //  validação de entrada
            }

            var filmeTemp = await _dbContext.Filmes
            .FirstOrDefaultAsync(f => f.titulo == titulo);


            if (filmeTemp is null)
            {
                return NotFound("Filme não encontrado."); //  tratamento de erro
            }

            _dbContext.Remove(filmeTemp);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}