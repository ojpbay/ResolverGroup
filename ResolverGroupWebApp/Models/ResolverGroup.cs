using System;
using System.Collections.Generic;

namespace ResolverGroupWebApp.Models
{
    public partial class ResolverGroup
    {
        public ResolverGroup()
        {
            Resolver = new HashSet<Resolver>();
        }

        public int Id { get; set; }
        public string ResolverGroupName { get; set; }

        public ICollection<Resolver> Resolver { get; set; }
    }
}
