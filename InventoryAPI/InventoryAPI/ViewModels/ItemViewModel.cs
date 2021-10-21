using InventoryAPI.Entities;

namespace InventoryAPI.ViewModels
{
    public class ItemViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int? Price { get; set; }
        public int? Quantity { get; set; }
        public int? Total { get; set; }

        public Item ToEntity()
        {
            return new Item
            {
                Id = Id,
                Name = Name,
                Brand = Brand,
                Model = Model,
                Price = Price,
                Quantity = Quantity,
                Total = Total
            };
        }
    }

}
