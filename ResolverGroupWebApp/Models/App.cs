using System;
using System.Collections.Generic;

namespace ResolverGroupWebApp.Models
{
    public partial class App
    {
        public int Id { get; set; }
        public string AppName { get; set; }
        public int? ResolverGroupId { get; set; }
        public string AppDescription { get; set; }
        public int? ContactId { get; set; }

        public Contact Contact { get; set; }
        public ResolverGroup ResolverGroup { get; set; }
    }
}
