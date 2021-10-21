using InventoryAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System;
using InventoryAPI.Entities;
using Microsoft.EntityFrameworkCore;

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

        public List<Item> GetStockItems(string brand)
        {
            return _context.Items.Where(item => string.Equals(item.Brand, brand, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        public int CreateItem(Item item)
        {
            _context.Items.Add(item);
            _context.SaveChanges();
            return item.Id;
        }

        public Item UpdateItem(Item item)
        {
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
            return item;
        }

        public void DeleteItem(int id)
        {
            _context.Items.Remove(GetItem(id));
            _context.SaveChanges();
        }
    }
}
