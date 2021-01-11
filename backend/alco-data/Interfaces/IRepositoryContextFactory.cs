namespace alco_data.Interfaces
{
    public interface IRepositoryContextFactory
    {
        AlcoContext CreateDbContext(string connectionString);
    }
}
