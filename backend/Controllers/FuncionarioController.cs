using Locadora.Data;
using Locadora.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClienteFuncionario.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        private readonly LocadoraDbContext _context;

        public FuncionarioController(LocadoraDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> GetFuncionarios()
        {
            var funcionarios = await _context.Funcionario.ToListAsync();
            return Ok(funcionarios);
        }

        [HttpGet("{cpf}")]
        public async Task<IActionResult> GetFuncionario(string cpf)
        {
            var funcionario = await _context.Funcionario.FirstOrDefaultAsync(f => f.CPF == cpf);

            if (funcionario == null)
            {
                return NotFound();
            }

            return Ok(funcionario);
        }


        [HttpPost]
        public async Task<IActionResult> PostFuncionario(Funcionario funcionario)
        {
            if (ModelState.IsValid)
            {
                _context.Funcionario.Add(funcionario);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetFuncionario), new { cpf = funcionario.CPF }, funcionario);
            }

            return BadRequest(ModelState);
        }


        [HttpPut("{cpf}")]
        public async Task<IActionResult> PutFuncionario(string cpf, Funcionario funcionario)
        {
            if (cpf != funcionario.CPF)
            {
                return BadRequest();
            }

            _context.Entry(funcionario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FuncionarioExists(cpf))
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


        [HttpDelete("{cpf}")]
        public async Task<IActionResult> DeleteFuncionario(string cpf)
        {
            var funcionario = await _context.Funcionario.FirstOrDefaultAsync(f => f.CPF == cpf);
            if (funcionario == null)
            {
                return NotFound();
            }

            _context.Funcionario.Remove(funcionario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FuncionarioExists(string cpf)
        {
            return _context.Funcionario.Any(f => f.CPF == cpf);
        }
    }
}
