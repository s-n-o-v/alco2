namespace alco_data.Repositories
{
    using alco_model.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using alco_data.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class CommentRepo : BaseRepository, ICommentRepo
    {
        public CommentRepo(string connectionString, IRepositoryContextFactory contextFactory) : base(connectionString, contextFactory) { }

        public async Task Create(Comment item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Comments.Add(item);
                await context.SaveChangesAsync();
            }
        }

        public async Task Delete(Comment item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                if (item == null)
                {
                    throw new ArgumentNullException(nameof(item));
                }

                context.Comments.Remove(item);
                await context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Comment>> GetComments(int index = 0, int pageSize = 10, int? drinkId = null, int? rate = null, int? userId = null, string text = null, DateTime? commentDate = null)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.Comments.AsQueryable();

                if (!string.IsNullOrWhiteSpace(text))
                    query = query.Where(p => p.CommentText.Contains(text));
                
                if (drinkId.HasValue)
                    query = query.Where(p => p.DrinkId == drinkId);

                if (commentDate.HasValue)
                    query = query.Where(p => p.CommentDate == commentDate.Value.Date);

                if (rate.HasValue)
                    query = query.Where(p => p.Rate == rate);

                if (userId.HasValue)
                    query = query.Where(p => p.UserId == userId);

                return await query.Skip(index * pageSize).Take(pageSize).Include(u => u.User).ToListAsync();
            }
        }

        public async Task<Comment> GetItemById(int id)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                return await context.Comments.FirstOrDefaultAsync(p => p.Id == id);
            }
        }

        public async Task Update(Comment item)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                if (item == null)
                {
                    throw new ArgumentNullException(nameof(item));
                }

                var curItem = context.Comments.FirstOrDefault(p => p.Id == item.Id);
                context.Entry(curItem).CurrentValues.SetValues(item);
                await context.SaveChangesAsync();
            }
        }
    }
}
