namespace alco_backend.Profiles
{
    using alco_model.Dto.Category;
    using alco_model.Models;
    using AutoMapper;

    public class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<Category, CategoryCreate>();
            CreateMap<CategoryCreate, Category>();
        }
    }
}
