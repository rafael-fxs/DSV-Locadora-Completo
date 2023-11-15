using Locadora.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PedidoController.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PedidoController : ControllerBase
{
    private LocadoraDbContext _dbContext;
    public PedidoController(LocadoraDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    private static List<Pedido> pedidos = new List<Pedido>();

    [HttpPost]
    public ActionResult<Pedido> Post(Pedido pedido)
    {
        pedido.Id = pedidos.Count + 1;
        pedidos.Add(pedido);
        return CreatedAtAction(nameof(GetById), new { id = pedido.Id }, pedido);
    }

    [HttpGet]
    public ActionResult<IEnumerable<Pedido>> Get()
    {
        return Ok(pedidos);
    }

    [HttpGet("{id}")]
    public ActionResult<Pedido> GetById(int id)
    {
        var pedido = pedidos.FirstOrDefault(p => p.Id == id);
        if (pedido == null)
        {
            return NotFound();
        }
        return Ok(pedido);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Pedido pedidoAtualizado)
    {
        var pedidoExistente = pedidos.FirstOrDefault(p => p.Id == id);
        if (pedidoExistente == null)
        {
            return NotFound();
        }

        pedidoExistente.NomeProduto = pedidoAtualizado.NomeProduto;
        pedidoExistente.Quantidade = pedidoAtualizado.Quantidade;
        pedidoExistente.ValorTotal = pedidoAtualizado.ValorTotal;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var pedido = pedidos.FirstOrDefault(p => p.Id == id);
        if (pedido == null)
        {
            return NotFound();
        }

        pedidos.Remove(pedido);

        return NoContent();
    }

    [HttpGet("{id}")]
    public ActionResult<Pedido> GetByClienteId(int clienteId)
    {
        var pedido = pedidos.FirstOrDefault(p => p.ClienteId == clienteId);
        if (pedido == null)
        {
            return NotFound();
        }
        return Ok(pedido);
    }
}