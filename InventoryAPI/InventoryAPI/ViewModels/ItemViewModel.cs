using InventoryAPI.Entities;

namespace InventoryAPI.ViewModels
{
    public class ItemViewModel
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? Price { get; set; }
        public int? Quantity { get; set; }
        public string Total { get; set; }
        public int? SupplierId { get; set; }

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
