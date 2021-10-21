using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface IItemsRepository
    {
        List<Item> GetItems();

        Item GetItem(int id);

        List<Item> GetStockItems(string brand);

        int CreateItem(Item item);

        Item UpdateItem(Item item);

        void DeleteItem(int id);
    }
}
