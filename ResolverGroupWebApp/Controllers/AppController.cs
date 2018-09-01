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
    public class AppController : ControllerBase
    {
        private readonly ResolverToolContext _context;

        public AppController(ResolverToolContext context)
        {
            _context = context;
        }

        // GET: api/App
        [HttpGet]
        public IEnumerable<AppViewModel> GetApp()
        {
            return _context.App.Include(app => app.Contact).Include(app => app.ResolverGroup).Select(a => new AppViewModel
            {
                AppDescription = a.AppDescription,
                AppName = a.AppName,
                ContactName = a.Contact.ContactName,
                ResolverGroupName = a.ResolverGroup.ResolverGroupName
            });
        }

        // GET: api/App/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetApp([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var app = await _context.App.FindAsync(id);

            if (app == null)
            {
                return NotFound();
            }

            return Ok(app);
        }       
    }
}