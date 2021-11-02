using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace InventoryAPI.Entities
{
    public partial class Item
    {
        [Key]
        public int Id { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? Price { get; set; }
        public int? Quantity { get; set; }
        public string Total { get; set; }
        public int? SupplierId { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
        public virtual Supplier Suppliers { get; set; }
    }
}
