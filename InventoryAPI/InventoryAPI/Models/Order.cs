using System;
using System.Collections.Generic;

#nullable disable

namespace InventoryAPI.Models
{
    public partial class Order
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public long? ItemId { get; set; }
        public long? Quantity { get; set; }
        public long? Price { get; set; }
        public string Total { get; set; }

        public virtual Item Item { get; set; }
    }
}
