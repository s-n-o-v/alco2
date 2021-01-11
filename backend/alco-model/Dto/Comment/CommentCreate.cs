namespace alco_model.Dto.Comment
{
    using System.ComponentModel.DataAnnotations;

    public class CommentCreate
    {
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
    }
}
