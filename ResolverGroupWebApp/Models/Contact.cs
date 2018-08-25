using System;
using System.Collections.Generic;

namespace ResolverGroupWebApp.Models
{
    public partial class Contact
    {
        public Contact()
        {
            Resolver = new HashSet<Resolver>();
        }

        public int Id { get; set; }
        public string ContactName { get; set; }

        public ICollection<Resolver> Resolver { get; set; }
    }
}
