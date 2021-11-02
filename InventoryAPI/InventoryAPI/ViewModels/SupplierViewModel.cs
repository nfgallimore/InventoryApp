using InventoryAPI.Entities;

namespace InventoryAPI.ViewModels
{
    public class SupplierViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public string Address { get; set; }

        public Supplier ToEntity()
        {
            return new Supplier
            {
                Id = Id,
                Name = Name,
                Contact = Contact,
                Address = Address
            };
        }
    }
}
