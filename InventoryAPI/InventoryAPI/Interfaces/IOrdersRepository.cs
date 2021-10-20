using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface IOrdersRepository
    {
        List<Order> GetOrders();
    }
}
