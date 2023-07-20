using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace listingapi.Infrastructure.Database.Models
{
    [Table("pricehistory")]
    public class PriceHistory
    {
        [Key]
        [Column("id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        [ForeignKey("listing_id")]
        [Column("listing_id")]
        public int ListingId { get; set; }
        [Column("price")]
        public double Price { get; set; }
        [Column("created_date")]
        public DateTime CreatedDate { get; set; }

        public virtual Listing Listing { get; set; }
    }
}
