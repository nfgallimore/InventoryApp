using System;
using System.Collections.Generic;
using System.Linq;
using InventoryAPI.Entities;
using InventoryAPI.Interfaces;

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
            return _context.Orders.Add(order).Entity.Id;
        }

        public Order UpdateOrder(Order order)
        {
            return _context.Orders.Update(order).Entity;
        }

        public void DeleteOrder(int id)
        {
            _context.Orders.Remove(GetOrder(id));
        }

    }
}
