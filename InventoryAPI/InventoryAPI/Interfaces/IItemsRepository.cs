using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface IItemsRepository
    {
        List<Item> GetItems();

        Item GetItem(long id);

        List<Item> GetStockItems(string name);

        long CreateItem(Item item);

        Item UpdateItem(Item item);

        void DeleteItem(long id);
    }
}
