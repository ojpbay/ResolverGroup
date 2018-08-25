using System;
using System.Collections.Generic;

namespace ResolverGroupWebApp.Models
{
    public partial class Resolver
    {
        public int Id { get; set; }
        public string ResolverDescription { get; set; }
        public int ResolverGroupId { get; set; }
        public int? ContactId { get; set; }

        public Contact Contact { get; set; }
        public ResolverGroup ResolverGroup { get; set; }
    }
}
