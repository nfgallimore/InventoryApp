using System.Collections.Generic;
using System.Linq;
using InventoryAPI.Interfaces;
using InventoryAPI.Models;

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
    }
}
