using System;
using System.Collections.Generic;

#nullable disable

namespace InventoryAPI.Models
{
    public partial class Item
    {
        public Item()
        {
            Orders = new HashSet<Order>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public long? Price { get; set; }
        public long? Quantity { get; set; }
        public string Total { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}
