namespace alco_data.Interfaces
{
    using alco_model.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface ICategoryRepo : IBaseRepo<Category>
    {
        Task<IEnumerable<Category>> GetCategoriesByParentId(int parentId);

        Task<IEnumerable<Category>> GetCategoriesByName(string name);
    }
}
