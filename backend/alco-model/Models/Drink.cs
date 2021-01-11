using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace alco_model.Models
{
    public class Drink
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [Required]
        public byte Rate { get; set; } 

        public virtual ICollection<Comment> Comments { get; set; }
    }
}
