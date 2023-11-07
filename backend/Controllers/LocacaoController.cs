using Locadora.Data;
using Locadora.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace projeto.Controllers;

[ApiController]
[Route("[controller]")]
public class LocacaoController : ControllerBase
{
    private LocadoraDbContext _dbContext;

    public LocacaoController(LocadoraDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    [Route("cadastrar")]
    public async Task<ActionResult> Cadastrar(Locacao locacao)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Locacoes is null) return NotFound();
        await _dbContext.AddAsync(locacao);
        await _dbContext.SaveChangesAsync();
        return Created("", locacao);
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<IEnumerable<Locacao>>> Listar()
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Locacoes is null) return NotFound();
        return await _dbContext.Locacoes.ToListAsync();
    }

    [HttpPut()]
    [Route("alterartitulo/{id}")]
    public async Task<ActionResult> AlterarTitulo(int id, [FromForm] string titulo)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Locacoes is null) return NotFound();
        var locacaoTemp = await _dbContext.Locacoes.FindAsync(id);
        if (locacaoTemp is null) return NotFound();
        locacaoTemp.Titulo = titulo;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPut()]
    [Route("alterarnomecliente/{id}")]
    public async Task<ActionResult> AlterarNomeCliente(int id, [FromForm] string nome_cliente)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Locacoes is null) return NotFound();
        var locacaoTemp = await _dbContext.Locacoes.FindAsync(id);
        if (locacaoTemp is null) return NotFound();
        locacaoTemp.NomeCliente = nome_cliente;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete()]
    [Route("excluir/{id}")]
    public async Task<ActionResult> Excluir(int id)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Locacoes is null) return NotFound();
        var locacaoTemp = await _dbContext.Locacoes.FindAsync(id);
        if (locacaoTemp is null) return NotFound();
        _dbContext.Remove(locacaoTemp);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}
