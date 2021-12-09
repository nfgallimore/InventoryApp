using System;
using System.Collections.Generic;
using System.Linq;
using InventoryAPI.Models;
using InventoryAPI.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InventoryAPI.Repositories
{
    public class OrdersRepository : IOrdersRepository
    {
        private readonly localdbContext _context;

        public OrdersRepository(localdbContext context)
        {
            _context = context;
        }

        public List<Order> GetOrders()
        {
            return _context.Orders.ToList();
        }

        public Order GetOrder(long id)
        {
            return _context.Orders.FirstOrDefault(x => x.Id == id);
        }

        public List<Order> GetUserOrders(string name)
        {
            return _context.Orders.Where(order => string.Equals(order.Name, name, StringComparison.CurrentCultureIgnoreCase)).ToList();
        }

        public long CreateOrder(Order order)
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
            dbOrder.Name = order.Name;
            dbOrder.Price = order.Price;
            dbOrder.Quantity = order.Quantity;
            dbOrder.Tax = order.Tax;
            dbOrder.Total = order.Total;

            _context.Entry(dbOrder).State = EntityState.Modified;
            _context.SaveChanges();
            return order;
        }

        public void DeleteOrder(long id)
        {
            _context.Orders.Remove(GetOrder(id));
            _context.SaveChanges();
        }
    }
}
