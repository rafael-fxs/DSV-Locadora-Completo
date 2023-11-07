using Locadora.Data;
using Locadora.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace projeto.Controllers;

[ApiController]
[Route("[controller]")]
public class PagamentoController : ControllerBase
{
    private LocadoraDbContext _dbContext;

    public PagamentoController(LocadoraDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    [Route("cadastrar")]
    public async Task<ActionResult> Cadastrar(Pagamento pagamento)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Pagamentos is null) return NotFound();
        await _dbContext.AddAsync(pagamento);
        await _dbContext.SaveChangesAsync();
        return Created("", pagamento);
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<IEnumerable<Pagamento>>> Listar()
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Pagamentos is null) return NotFound();
        return await _dbContext.Pagamentos.ToListAsync();
    }

    [HttpPut()]
    [Route("alterarvalor/{id}")]
    public async Task<ActionResult> AlterarValor(int id, [FromForm] decimal valor)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Pagamentos is null) return NotFound();
        var pagamentoTemp = await _dbContext.Pagamentos.FindAsync(id);
        if (pagamentoTemp is null) return NotFound();
        pagamentoTemp.Valor = valor;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPut()]
    [Route("alterartipopagamento/{id}")]
    public async Task<ActionResult> AlterarTipoPagamento(int id, [FromForm] string tipo_pagamento)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Pagamentos is null) return NotFound();
        var pagamentoTemp = await _dbContext.Pagamentos.FindAsync(id);
        if (pagamentoTemp is null) return NotFound();
        pagamentoTemp.TipoPagamento = tipo_pagamento;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete()]
    [Route("excluir/{id}")]
    public async Task<ActionResult> Excluir(int id)
    {
        if (_dbContext is null) return NotFound();
        if (_dbContext.Pagamentos is null) return NotFound();
        var pagamentoTemp = await _dbContext.Pagamentos.FindAsync(id);
        if (pagamentoTemp is null) return NotFound();
        _dbContext.Remove(pagamentoTemp);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}
