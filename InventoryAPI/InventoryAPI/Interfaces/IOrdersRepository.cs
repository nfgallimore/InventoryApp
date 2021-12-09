using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface IOrdersRepository
    {
        List<Order> GetOrders();

        Order GetOrder(long id);

        List<Order> GetUserOrders(string name);

        long CreateOrder(Order order);

        Order UpdateOrder(Order order);

        void DeleteOrder(long id);
    }
}
