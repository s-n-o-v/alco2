using System.ComponentModel.DataAnnotations;

namespace alco_model.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int? ParentId { get; set; }
    }
}
