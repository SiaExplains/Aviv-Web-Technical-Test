using Newtonsoft.Json;
using System;

namespace listingapi.Models
{
    public partial class PriceHistory : PriceReadOnly
    {
        [JsonProperty("listing_id")]
        public int ListingId { get; set; }
    }
}
