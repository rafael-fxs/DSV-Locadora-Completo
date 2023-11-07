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
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(endereco.ClienteId);
        if(enderecoTemp is null) return NotFound();      
        _dbContext.Entry(enderecoTemp).State = EntityState.Detached; 
        _dbContext.Endereco.Update(endereco);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarRua/{clienteId}")]
    public async Task<ActionResult> MudarRua(int clienteId, [FromForm] string rua)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        enderecoTemp.Rua = rua;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarBairro/{clienteId}")]
    public async Task<ActionResult> MudarBairro(int clienteId, [FromForm] string bairro)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        enderecoTemp.Bairro = bairro;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarCidade/{clienteId}")]
    public async Task<ActionResult> MudarCidade(int clienteId, [FromForm] string cidade)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        enderecoTemp.Cidade = cidade;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarEstado/{clienteId}")]
    public async Task<ActionResult> MudarEstado(int clienteId, [FromForm] string estado)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        enderecoTemp.Estado = estado;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarNumero/{clienteId}")]
    public async Task<ActionResult> MudarNumero(int clienteId, [FromForm] int numero)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        enderecoTemp.Numero = numero;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarComplemento/{clienteId}")]
    public async Task<ActionResult> MudarComplemento(int clienteId, [FromForm] string complemento)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        enderecoTemp.Complemento = complemento;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpPatch()]
    [Route("mudarCEP/{clienteId}")]
    public async Task<ActionResult> MudarCEP(int clienteId, [FromForm] int cep)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        enderecoTemp.CEP = cep;
        await _dbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete()]
    [Route("excluir/{clienteId}")]
    public async Task<ActionResult> Excluir(int clienteId)
    {
        if(_dbContext is null) return NotFound();
        if(_dbContext.Endereco is null) return NotFound();
        var enderecoTemp = await _dbContext.Endereco.FindAsync(clienteId);
        if(enderecoTemp is null) return NotFound();
        _dbContext.Remove(enderecoTemp);
        await _dbContext.SaveChangesAsync();
        return Ok();
    }
}




