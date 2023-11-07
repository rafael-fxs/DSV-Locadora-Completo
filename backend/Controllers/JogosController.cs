using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Locadora.Data;
using Locadora.Models;

namespace MinhaAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JogosController : ControllerBase
    {
        private LocadoraDbContext _dbContext;

        public JogosController(LocadoraDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        [Route("cadastrar")]
        public async Task<IActionResult> Cadastrar(Jogos jogos)
        {
            if (_dbContext is null)
                return NotFound();

            if (_dbContext.Jogos is null)
                return NotFound();

            await _dbContext.AddAsync(jogos);
            await _dbContext.SaveChangesAsync();
            return Created("", jogos);
        }

        [HttpGet]
        [Route("listar")]
        public async Task<ActionResult<IEnumerable<Jogos>>> Listar()
        {
            if (_dbContext is null)
                return NotFound();

            if (_dbContext.Jogos is null)
                return NotFound();

            return await _dbContext.Jogos.ToListAsync();
        }

        [HttpGet]
        [Route("buscar/{titulo}")]
        public async Task<ActionResult<Jogos>> Buscar(string titulo)
        {
            if (_dbContext is null)
                return NotFound();

            var JogoTemp = await _dbContext.Jogos
            .FirstOrDefaultAsync(j => j.titulo == titulo);

            if (JogoTemp is null)
                return NotFound();

            return JogoTemp;
        }

        [HttpPut]
        [Route("alterar")]
        public async Task<ActionResult> Alterar(Jogos jogos)
        {
            if (_dbContext is null)
                return NotFound();

            if (_dbContext.Jogos is null)
                return NotFound();

            var jogoTemp = await _dbContext.Jogos
            .FirstOrDefaultAsync(j => j.titulo == jogos.titulo);

            if (jogoTemp is null)
                return NotFound();

            _dbContext.Jogos.Update(jogos);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpPatch]
        [Route("mudardescricao/{titulo}")]
        public async Task<ActionResult> MudarDescricao(string titulo, string descricao, string genero)
        {
            if (_dbContext is null)
                return NotFound();

            if (_dbContext.Jogos is null)
                return NotFound();

            var jogoTemp = await _dbContext.Jogos
            .FirstOrDefaultAsync(j => j.titulo == titulo);

            if (jogoTemp is null)
                return NotFound();

            jogoTemp.descricao = descricao;
            jogoTemp.genero = genero;
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete]
        [Route("excluir/{titulo}")]
        public async Task<ActionResult> Excluir(string titulo)
        {
            if (_dbContext is null)
                return NotFound();

            if (_dbContext.Jogos is null)
                return NotFound();

            var jogoTemp = await _dbContext.Jogos
            .FirstOrDefaultAsync(j => j.titulo == titulo);

            if (jogoTemp is null)
                return NotFound();

            _dbContext.Remove(jogoTemp);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}