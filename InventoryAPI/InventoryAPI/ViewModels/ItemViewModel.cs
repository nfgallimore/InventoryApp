using InventoryAPI.Models;

namespace InventoryAPI.ViewModels
{
    public class ItemViewModel
    {
        public long Id { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long? Price { get; set; }
        public long? Quantity { get; set; }
        public long? Total { get; set; }
        public long? SupplierId { get; set; }

        public Item ToEntity()
        {
            return new Item
            {
                Id = Id,
                Category = Category,
                Name = Name,
                Description = Description,
                Price = Price,
                Quantity = Quantity,
                Total = Total,
                SupplierId = SupplierId
            };
        }
    }

}
