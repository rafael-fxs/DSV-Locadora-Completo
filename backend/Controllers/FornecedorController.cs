using Locadora.Data;
using Microsoft.AspNetCore.Mvc;

namespace SuaWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FornecedorController : ControllerBase
    {
        private readonly LocadoraDbContext _context;

        public FornecedorController(LocadoraDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Fornecedor>> Get()
        {
            var fornecedores = _context.Fornecedores.ToList();
            return Ok(fornecedores);
        }

        [HttpGet("{id}")]
        public ActionResult<Fornecedor> Get(int id)
        {
            var fornecedor = _context.Fornecedores.FirstOrDefault(f => f.Id == id);

            if (fornecedor == null)
            {
                return NotFound();
            }

            return Ok(fornecedor);
        }

        [HttpPost]
        public ActionResult<Fornecedor> Post([FromBody] Fornecedor fornecedor)
        {
            if (fornecedor == null)
            {
                return BadRequest();
            }

            _context.Fornecedores.Add(fornecedor);
            _context.SaveChanges();

            return CreatedAtAction("Get", new { id = fornecedor.Id }, fornecedor);
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Fornecedor fornecedorAtualizado)
        {
            if (fornecedorAtualizado == null || fornecedorAtualizado.Id != id)
            {
                return BadRequest();
            }

            var fornecedor = _context.Fornecedores.FirstOrDefault(f => f.Id == id);

            if (fornecedor == null)
            {
                return NotFound();
            }

            fornecedor.Nome = fornecedorAtualizado.Nome;
            fornecedor.CNPJ = fornecedorAtualizado.CNPJ;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var fornecedor = _context.Fornecedores.FirstOrDefault(f => f.Id == id);

            if (fornecedor == null)
            {
                return NotFound();
            }

            _context.Fornecedores.Remove(fornecedor);
            _context.SaveChanges();

            return NoContent();
        }
    }
}