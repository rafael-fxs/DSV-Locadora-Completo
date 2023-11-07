using Locadora.Data;
using Microsoft.AspNetCore.Mvc;

namespace TrabalhoCris.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssinaturaPlanoController : ControllerBase
    {
        private readonly LocadoraDbContext _context;

        public AssinaturaPlanoController(LocadoraDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AssinaturaPlano>> Get()
        {
            var assinaturas = _context.Assinaturas.ToList();
            return Ok(assinaturas);
        }

        [HttpGet("{id}")]
        public ActionResult<AssinaturaPlano> Get(int id)
        {
            var assinatura = _context.Assinaturas.FirstOrDefault(a => a.Id == id);

            if (assinatura == null)
            {
                return NotFound();
            }

            return Ok(assinatura);
        }

        [HttpPost]
        public ActionResult<AssinaturaPlano> Post([FromBody] AssinaturaPlano assinatura)
        {
            if (assinatura == null)
            {
                return BadRequest();
            }

            _context.Assinaturas.Add(assinatura);
            _context.SaveChanges();

            return CreatedAtAction("Get", new { id = assinatura.Id }, assinatura);
        }

        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] AssinaturaPlano assinaturaAtualizada)
        {
            if (assinaturaAtualizada == null || assinaturaAtualizada.Id != id)
            {
                return BadRequest();
            }

            var assinatura = _context.Assinaturas.FirstOrDefault(a => a.Id == id);

            if (assinatura == null)
            {
                return NotFound();
            }

            assinatura.NomeAssinante = assinaturaAtualizada.NomeAssinante;
            assinatura.PlanoId = assinaturaAtualizada.PlanoId;
            assinatura.DataInicio = assinaturaAtualizada.DataInicio;
            assinatura.DataFim = assinaturaAtualizada.DataFim;

            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var assinatura = _context.Assinaturas.FirstOrDefault(a => a.Id == id);

            if (assinatura == null)
            {
                return NotFound();
            }

            _context.Assinaturas.Remove(assinatura);
            _context.SaveChanges();

            return NoContent();
        }
    }
}