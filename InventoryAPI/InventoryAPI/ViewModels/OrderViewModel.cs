using InventoryAPI.Models;

namespace InventoryAPI.ViewModels
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public int? ItemId { get; set; }
        public string Description { get; set; }
        public int? Quantity { get; set; }
        public int? Price { get; set; }
        public int? Tax { get; set; }
        public int? Total { get; set; }

        public Order ToEntity()
        {
            return new Order
            {
                Id = Id,
                Name = Name,
                Contact = Contact,
                ItemId = ItemId,
                Quantity = Quantity,
                Price = Price,
                Tax = Tax,
                Total = Total
            };
        }
    }

}
