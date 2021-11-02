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

        public List<Item> GetStockItems(string name)
        {
            return _context.Items.Where(item => string.Equals(item.Name, name, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        public int CreateItem(Item item)
        {
            _context.Items.Add(item);
            _context.SaveChanges();
            return item.Id;
        }

        public Item UpdateItem(Item item)
        {
            Item dbItem = _context.Items.Find(item.Id);
            dbItem.Category = item.Category;
            dbItem.Name = item.Name;
            dbItem.Description = item.Description;
            dbItem.Price = item.Price;
            dbItem.Quantity = item.Quantity;
            dbItem.Total = item.Total;
            dbItem.SupplierId = item.SupplierId;
            _context.Entry(dbItem).State = EntityState.Modified;
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
