namespace alco_data.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using alco_model.Models;

    public interface ICommentRepo : IBaseRepo<Comment>
    {
        Task<IEnumerable<Comment>> GetComments(int index = 0, int pageSize = 10, int? drinkId = null, int? rate = null, int? userId = null, string text = null, DateTime? commentDate = null);
    }
}
