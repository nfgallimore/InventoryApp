using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace InventoryAPI.Entities
{
    public partial class Supplier
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Item> Items { get; set; }
    }
}
