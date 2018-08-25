using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ResolverGroupWebApp.Models;

namespace ResolverGroupWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResolverController : ControllerBase
    {
        private readonly ResolverToolContext _context;

        public ResolverController(ResolverToolContext context)
        {
            _context = context;
        }

        // GET: api/Resolver
        [HttpGet]
        public IEnumerable<Resolver> GetResolver()
        {
            return _context.Resolver;
        }

        // GET: api/Resolver/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetResolver([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var resolver = await _context.Resolver.FindAsync(id);

            if (resolver == null)
            {
                return NotFound();
            }

            return Ok(resolver);
        }

        // PUT: api/Resolver/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResolver([FromRoute] int id, [FromBody] Resolver resolver)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != resolver.Id)
            {
                return BadRequest();
            }

            _context.Entry(resolver).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResolverExists(id))
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

        // POST: api/Resolver
        [HttpPost]
        public async Task<IActionResult> PostResolver([FromBody] Resolver resolver)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Resolver.Add(resolver);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetResolver", new { id = resolver.Id }, resolver);
        }

        // DELETE: api/Resolver/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResolver([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var resolver = await _context.Resolver.FindAsync(id);
            if (resolver == null)
            {
                return NotFound();
            }

            _context.Resolver.Remove(resolver);
            await _context.SaveChangesAsync();

            return Ok(resolver);
        }

        private bool ResolverExists(int id)
        {
            return _context.Resolver.Any(e => e.Id == id);
        }
    }
}