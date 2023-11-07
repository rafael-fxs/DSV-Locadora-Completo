using Locadora.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ReservaController.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReservaController : ControllerBase
{
    private LocadoraDbContext _dbContext;

    public ReservaController(LocadoraDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    private static List<Reserva> reservas = new List<Reserva>();

    [HttpPost]
    public ActionResult<Reserva> Post(Reserva reserva)
    {
        reserva.Id = reservas.Count + 1;
        reservas.Add(reserva);
        return CreatedAtAction(nameof(GetById), new { id = reserva.Id }, reserva);
    }

    [HttpGet("{id}")]
    public ActionResult<Reserva> GetById(int id)
    {
        var reserva = reservas.FirstOrDefault(r => r.Id == id);
        if (reserva == null)
        {
            return NotFound();
        }
        return Ok(reserva);
    }

    [HttpGet]
    public ActionResult<IEnumerable<Reserva>> Get()
    {
        return Ok(reservas);
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Reserva reservaAtualizada)
    {
        var reservaExistente = reservas.FirstOrDefault(r => r.Id == id);
        if (reservaExistente == null)
        {
            return NotFound();
        }

        reservaExistente.NomeCliente = reservaAtualizada.NomeCliente;
        reservaExistente.DataReserva = reservaAtualizada.DataReserva;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var reserva = reservas.FirstOrDefault(r => r.Id == id);
        if (reserva == null)
        {
            return NotFound();
        }

        reservas.Remove(reserva);

        return NoContent();
    }
}
