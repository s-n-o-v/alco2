namespace alco_data.Interfaces
{
    using alco_model.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IDrinkRepo : IBaseRepo<Drink>
    {
        Task<IEnumerable<Drink>> GetDrinks(int index = 0, int pageSize = 10, int? categoryId = null, string name = null, string description = null);
    }
}
