using alco_data.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace alco_data.Factories
{
    public class RepositoryContextFactory : IRepositoryContextFactory
    {
		public AlcoContext CreateDbContext(string connectionString)
		{
			var optionsBuilder = new DbContextOptionsBuilder<AlcoContext>();
			optionsBuilder.UseNpgsql(connectionString);

			return new AlcoContext(optionsBuilder.Options);
		}
	}
}
