namespace alco_backend.Profiles
{
    using alco_model.Dto.Comment;
    using alco_model.Models;
    using AutoMapper;

    public class CommentProfile : Profile
    {
        public CommentProfile()
        {
            CreateMap<Comment, CommentCreate>();
            CreateMap<CommentCreate, Comment>();
        }
    }
}
