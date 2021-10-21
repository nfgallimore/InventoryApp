using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface IOrdersRepository
    {
        List<Order> GetOrders();

        Order GetOrder(int id);

        List<Order> GetUserOrders(string name);

        int CreateOrder(Order order);

        Order UpdateOrder(Order order);

        void DeleteOrder(int id);
    }
}
