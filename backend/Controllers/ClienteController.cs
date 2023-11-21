using Locadora.Data;
using Locadora.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClienteFuncionario.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly LocadoraDbContext _context;

        public ClienteController(LocadoraDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetClientes()
        {
            var clientes = await _context.Cliente.ToListAsync();
            return Ok(clientes);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetCliente(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return Ok(cliente);
        }


        [HttpPost]
        [Route("cadastrar")]
         public async Task<IActionResult> Cadastrar(Cliente cliente)
        {
            
            {
                if (cliente==null) return BadRequest("Dados invalidos ");

                await _context.Cliente.AddAsync(cliente);
                await _context.SaveChangesAsync();
                return Ok("cliente cadastrado com sucesso");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCliente(int id, Cliente cliente)
        {
            if (id != cliente.Id)
            {
                return BadRequest();
            }

            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var cliente = await _context.Cliente.FindAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Cliente.Remove(cliente);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClienteExists(int id)
        {
            return _context.Cliente.Any(c => c.Id == id);
        }
    }
}
