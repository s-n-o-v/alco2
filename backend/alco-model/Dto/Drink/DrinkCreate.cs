namespace alco_model.Dto.Drink
{
    using System.ComponentModel.DataAnnotations;

    public class DrinkCreate
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public System.DateTime CreatedDate { get; set; }

        [Required]
        public int CategoryId { get; set; }

        [Required]
        public byte Rate { get; set; }
    }
}
