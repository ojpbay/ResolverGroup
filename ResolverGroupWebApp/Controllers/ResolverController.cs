using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ResolverGroupWebApp.Models;
using ResolverGroupWebApp.ViewModels;

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
        public IEnumerable<ResolverViewModel> GetResolver()
        {
            return _context.Resolver.Include(rg => rg.Contact).Include(rg => rg.ResolverGroup).Select(x => new ResolverViewModel {
                ResolverDescription = x.ResolverDescription,
                ContactName = x.Contact.ContactName,
                ResolverGroupName = x.ResolverGroup.ResolverGroupName
            });
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
    }
}