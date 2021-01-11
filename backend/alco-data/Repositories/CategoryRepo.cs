namespace alco_data.Repositories
{
    using alco_model.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using alco_data.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class CategoryRepo : BaseRepository, ICategoryRepo
    {
        public CategoryRepo(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task Create(Category item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Categories.Add(item);
                await context.SaveChangesAsync();
            }
        }

        public async Task Delete(Category item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                if (item == null)
                {
                    throw new ArgumentNullException(nameof(item));
                }

                context.Categories.Remove(item);
                await context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Category>> GetCategoriesByName(string name)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Categories.AsQueryable();

                if (!string.IsNullOrWhiteSpace(name))
                    query = query.Where(p => p.Name == name);

                return await query.ToListAsync();
            }
        }

        public async Task<IEnumerable<Category>> GetCategoriesByParentId(int parentId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Categories.Where(p => p.ParentId == parentId).ToListAsync();
            }
        }

        public async Task<Category> GetItemById(int id)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Categories.FirstOrDefaultAsync(p => p.Id == id);
            }
        }

        public async Task Update(Category item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                if (item == null)
                {
                    throw new ArgumentNullException(nameof(item));
                }

                var curItem = context.Categories.FirstOrDefault(p => p.Id == item.Id);
                context.Entry(curItem).CurrentValues.SetValues(item);
                await context.SaveChangesAsync();
            }
        }
    }
}
