using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ResolverGroupWebApp.Models
{
    public partial class ResolverToolContext : DbContext
    {
        public ResolverToolContext()
        {
        }

        public ResolverToolContext(DbContextOptions<ResolverToolContext> options)
            : base(options)
        {
        }

        public virtual DbSet<App> App { get; set; }
        public virtual DbSet<AppDescription> AppDescription { get; set; }
        public virtual DbSet<Contact> Contact { get; set; }
        public virtual DbSet<Resolver> Resolver { get; set; }
        public virtual DbSet<ResolverGroup> ResolverGroup { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=.;Database=ResolverTool;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<App>(entity =>
            {
                entity.Property(e => e.AppDescription).HasMaxLength(2000);

                entity.Property(e => e.AppName).HasMaxLength(255);
            });

            modelBuilder.Entity<AppDescription>(entity =>
            {
                entity.Property(e => e.AppDescription1)
                    .IsRequired()
                    .HasColumnName("AppDescription")
                    .HasMaxLength(2000);
            });

            modelBuilder.Entity<Contact>(entity =>
            {
                entity.Property(e => e.ContactName)
                    .IsRequired()
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Resolver>(entity =>
            {
                entity.Property(e => e.ResolverDescription).HasMaxLength(2000);

                entity.HasOne(d => d.Contact)
                    .WithMany(p => p.Resolver)
                    .HasForeignKey(d => d.ContactId)
                    .HasConstraintName("FK_Resolver_Contact");

                entity.HasOne(d => d.ResolverGroup)
                    .WithMany(p => p.Resolver)
                    .HasForeignKey(d => d.ResolverGroupId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Resolver_ResolverGroup");
            });

            modelBuilder.Entity<ResolverGroup>(entity =>
            {
                entity.Property(e => e.ResolverGroupName)
                    .IsRequired()
                    .HasMaxLength(255);
            });
        }
    }
}
