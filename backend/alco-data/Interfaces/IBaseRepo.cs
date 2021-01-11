namespace alco_data.Interfaces
{
    using System.Threading.Tasks;

    public interface IBaseRepo<T>
    {
        Task<T> GetItemById(int id);

        Task Create(T item);

        Task Update(T item);

        Task Delete(T item);

    }
}
