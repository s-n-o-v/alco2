using Microsoft.EntityFrameworkCore;
using alco_data.Interfaces;

namespace alco_data.Repositories
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }

        protected IRepositoryContextFactory ContextFactory { get; }

        public BaseRepository(string connectionString, IRepositoryContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }
    }
}
