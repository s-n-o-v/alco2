namespace alco_data.Repositories
{
    using alco_model.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using alco_data.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class DrinkRepo : BaseRepository, IDrinkRepo
    {
        public DrinkRepo(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task Create(Drink item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Drinks.Add(item);
                await context.SaveChangesAsync();
            }
        }

        public async Task Delete(Drink item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                if (item == null)
                {
                    throw new ArgumentNullException(nameof(item));
                }

                context.Drinks.Remove(item);
                await context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Drink>> GetDrinks(int index = 0, int pageSize = 10, int? categoryId = null, string name = null, string description = null)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Drinks.AsQueryable();

                if (!string.IsNullOrWhiteSpace(name))
                    query = query.Where(p => p.Name.Contains(name));

                if (!string.IsNullOrWhiteSpace(description))
                    query = query.Where(p => p.Description.Contains(description));

                if (categoryId.HasValue)
                    query = query.Where(p => p.CategoryId == categoryId);

                return await query.Skip(index * pageSize).Take(pageSize).Include(u => u.Comments).ToListAsync();
            }
        }

        public async Task<Drink> GetItemById(int id)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Drinks.FirstOrDefaultAsync(p => p.Id == id);
            }
        }

        public async Task Update(Drink item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                if (item == null)
                {
                    throw new ArgumentNullException(nameof(item));
                }

                var curItem = context.Drinks.FirstOrDefault(p => p.Id == item.Id);
                context.Entry(curItem).CurrentValues.SetValues(item);
                await context.SaveChangesAsync();
            }
        }
    }
}
