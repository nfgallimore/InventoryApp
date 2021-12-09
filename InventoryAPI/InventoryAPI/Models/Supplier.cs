using System;
using System.Collections.Generic;

#nullable disable

namespace InventoryAPI.Models
{
    public partial class Supplier
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string Address { get; set; }
    }
}
