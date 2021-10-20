using InventoryAPI.Interfaces;
using InventoryAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace InventoryAPI.Repositories
{
    public class ItemsRepository : IItemsRepository
    {
        private readonly InventoryDBContext _context;

        public ItemsRepository(InventoryDBContext context)
        {
            _context = context;
        }
        public List<Item> GetItems()
        {
            return _context.Items.ToList();
        }

    }
}
