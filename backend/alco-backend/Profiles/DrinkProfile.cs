namespace alco_backend.Profiles
{
    using alco_model.Dto.Drink;
    using alco_model.Models;
    using AutoMapper;

    public class DrinkProfile : Profile
    {
        public DrinkProfile()
        {
            CreateMap<Drink, DrinkCreate>();
            CreateMap<DrinkCreate, Drink>();
        }
    }
}
