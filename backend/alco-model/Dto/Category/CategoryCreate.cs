namespace alco_model.Dto.Category
{
    using System.ComponentModel.DataAnnotations;

    public class CategoryCreate
    {
        [Required]
        public string Name { get; set; }

        public int? ParentId { get; set; }

    }
}
