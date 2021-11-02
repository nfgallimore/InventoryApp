using System;
using System.Collections.Generic;

#nullable disable

namespace InventoryAPI.Models
{
    public partial class Image
    {
        public long Id { get; set; }
        public string Description { get; set; }
        public string ImageName { get; set; }
        public long? ItemId { get; set; }
    }
}
