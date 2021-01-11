using System.ComponentModel.DataAnnotations;

namespace alco_model.Models
{
    public class Comment
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public int DrinkId { get; set; }

        [Required]
        public string CommentText { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public System.DateTime CommentDate { get; set; } 

        [Required]
        public byte Rate { get; set; }

        public virtual User User { get; set; }

    }
}
