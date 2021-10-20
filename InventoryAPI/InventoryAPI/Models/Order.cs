﻿using System;
using System.Collections.Generic;

#nullable disable

namespace InventoryAPI.Models
{
    public partial class Order
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public int? ItemId { get; set; }
        public int? Quantity { get; set; }
        public int? Price { get; set; }
        public int? Total { get; set; }

        public virtual Item Item { get; set; }
    }
}
