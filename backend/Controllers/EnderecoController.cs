using Locadora.Data;
using Locadora.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EnderecoController.Controllers;
[ApiController]
[Route("[controller]")]
public class EnderecoController : ControllerBase
{
    private LocadoraDbContext _dbContext;
    public EnderecoController(LocadoraDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost]
    [Route("cadastrar")]
    public async Task<ActionResult> Cadastrar(Endereco endereco)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        await _dbContext.AddAsync(endereco);
        await _dbContext.SaveChangesAsync();
        return Created("", endereco);
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<IEnumerable<Endereco>>> Listar()
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        return await _dbContext.Endereco.ToListAsync();
    }

    
    [HttpGet]
    [Route("listarPeloCEP/{cep}")]
    public async Task<ActionResult<IEnumerable<Endereco>>> ListarPeloCEP(int cep)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecos = await _dbContext.Endereco
            .Where(e => e.CEP == cep)
            .ToListAsync();

        if (enderecos.Count == 0) return NotFound();
        return enderecos;
    }

    [HttpGet]
    [Route("buscar/{clienteId}")]
    public async Task<ActionResult<Endereco>> Buscar(int clienteId)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        return enderecoTemp;
    }

    [HttpPut()]
    [Route("alterar")]
    public async Task<ActionResult> Alterar(Endereco endereco)
    {
        if(_dbContext is null) return BadRequest();
        if(_dbContext.Endereco is null) return BadRequest();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(endereco.Id);
        if(enderecoTemp is null) return BadRequest();      
        _dbContext.Entry(enderecoTemp).State = EntityState.Detached; 
        _dbContext.Endereco.Update(endereco);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete()]
    [Route("excluir/{id}")]
    public async Task<ActionResult> Excluir(int id)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(id);
        if(enderecoTemp is null) return NotFound();
        _dbContext.Remove(enderecoTemp);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}




