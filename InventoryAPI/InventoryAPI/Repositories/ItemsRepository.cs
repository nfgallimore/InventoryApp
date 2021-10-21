using InventoryAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System;
using InventoryAPI.Entities;

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

        public Item GetItem(int id)
        {
            return _context.Items.FirstOrDefault(x => x.Id == id);
        }

        public List<Item> GetStockItems(string name)
        {
            return _context.Items.Where(item => string.Equals(item.Name, name, StringComparison.CurrentCultureIgnoreCase)).ToList();
        }

        public int CreateItem(Item item)
        {
            return _context.Items.Add(item).Entity.Id;
        }

        public Item UpdateItem(Item item)
        {
            return _context.Items.Update(item).Entity;
        }

        public void DeleteItem(int id)
        {
            _context.Items.Remove(GetItem(id));
        }
    }
}
