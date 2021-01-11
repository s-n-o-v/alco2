using System.ComponentModel.DataAnnotations;

namespace alco_model.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public int Permissions { get; set; }

        [MaxLength(255)]
        public string Name { get; set; }
    } 
}
