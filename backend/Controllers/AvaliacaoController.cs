using Locadora.Data;
using Locadora.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AvaliacaoController.Controllers;
[ApiController]
[Route("[controller]")]
public class AvaliacaoController : ControllerBase
{
    private LocadoraDbContext _dbContext;
    public AvaliacaoController(LocadoraDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    [Route("cadastrar")]
    public async Task<ActionResult> Cadastrar(Avaliacao avaliacao)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        await _dbContext.AddAsync(avaliacao);
        await _dbContext.SaveChangesAsync();
        return Created("", avaliacao);
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<IEnumerable<Avaliacao>>> Listar()
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        return await _dbContext.Avaliacao.ToListAsync();
    }

    [HttpGet]
    [Route("listarPeloCliente/{clienteId}")]
    public async Task<ActionResult<IEnumerable<Avaliacao>>> ListarPeloCliente(int clienteId)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacoes = await _dbContext.Avaliacao
            .Where(e => e.ClienteId == clienteId)
            .ToListAsync();

        if (avaliacoes.Count == 0) return NotFound();
        return avaliacoes;
    }

    [HttpGet]
    [Route("buscar/{id}")]
    public async Task<ActionResult<Avaliacao>> Buscar(int id)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacaoTemp = await _dbContext.Avaliacao.FindAsync(id);
        if (avaliacaoTemp is null) return NotFound();
        return avaliacaoTemp;
    }

    [HttpGet]
    [Route("buscarPeloPedido/{pedidoId}")]
    public async Task<ActionResult<Avaliacao>> BuscarPeloPedido(int pedidoId)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacaoTemp = await _dbContext.Avaliacao.FirstOrDefaultAsync(a => a.PedidoId == pedidoId);
        if (avaliacaoTemp is null) return NotFound();
        return avaliacaoTemp;
    }

    [HttpPut()]
    [Route("alterar")]
    public async Task<ActionResult> Alterar(Avaliacao avaliacao)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacaoTemp = await _dbContext.Avaliacao.FindAsync(avaliacao.Id);
        if (avaliacaoTemp is null) return NotFound();
        _dbContext.Entry(avaliacaoTemp).State = EntityState.Detached;
        _dbContext.Avaliacao.Update(avaliacao);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarComentario/{id}")]
    public async Task<ActionResult> MudarComentario(int id, [FromForm] string comentario)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacaoTemp = await _dbContext.Avaliacao.FindAsync(id);
        if (avaliacaoTemp is null) return NotFound();
        avaliacaoTemp.Comentario = comentario;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarClassificacao/{id}")]
    public async Task<ActionResult> MudarClassificacao(int id, [FromForm] int classificacao)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacaoTemp = await _dbContext.Avaliacao.FindAsync(id);
        if (avaliacaoTemp is null) return NotFound();
        avaliacaoTemp.Classificacao = classificacao;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete()]
    [Route("excluir/{id}")]
    public async Task<ActionResult> Excluir(int id)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacaoTemp = await _dbContext.Avaliacao.FindAsync(id);
        if (avaliacaoTemp is null) return NotFound();
        _dbContext.Remove(avaliacaoTemp);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete()]
    [Route("excluirPeloPedido/{pedidoId}")]
    public async Task<ActionResult> ExcluirPeloPedido(int pedidoId)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Avaliacao is null) return NotFound();
        var avaliacaoTemp = await _dbContext.Avaliacao.FirstOrDefaultAsync(a => a.PedidoId == pedidoId);
        if (avaliacaoTemp is null) return NotFound();
        _dbContext.Remove(avaliacaoTemp);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}




