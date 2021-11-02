using System;
using System.Collections.Generic;
using System.Linq;
using InventoryAPI.Entities;
using InventoryAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InventoryAPI.Repositories
{
    public class OrdersRepository : IOrdersRepository
    {
        private readonly InventoryDBContext _context;

        public OrdersRepository(InventoryDBContext context)
        {
            _context = context;
        }

        public List<Order> GetOrders()
        {
            return _context.Orders.ToList();
        }

        public Order GetOrder(int id)
        {
            return _context.Orders.FirstOrDefault(x => x.Id == id);
        }

        public List<Order> GetUserOrders(string name)
        {
            return _context.Orders.Where(order => string.Equals(order.Name, name, StringComparison.CurrentCultureIgnoreCase)).ToList();
        }

        public int CreateOrder(Order order)
        {
            _context.Orders.Add(order);
            _context.SaveChanges();
            return order.Id;
        }

        public Order UpdateOrder(Order order)
        {
            Order dbOrder = _context.Orders.Find(order.Id);
            dbOrder.Contact = order.Contact;
            dbOrder.ItemId = order.ItemId;
            dbOrder.Description = order.Description;
            dbOrder.Name = order.Name;
            dbOrder.Price = order.Price;
            dbOrder.Quantity = order.Quantity;
            dbOrder.Total = order.Total;

            _context.Entry(dbOrder).State = EntityState.Modified;
            _context.SaveChanges();
            return order;
        }

        public void DeleteOrder(int id)
        {
            _context.Orders.Remove(GetOrder(id));
            _context.SaveChanges();
        }
    }
}
