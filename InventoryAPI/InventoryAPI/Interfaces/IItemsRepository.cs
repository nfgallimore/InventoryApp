using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface IItemsRepository
    {
        List<Item> GetItems();
    }
}
