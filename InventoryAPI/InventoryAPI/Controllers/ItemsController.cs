using InventoryAPI.Interfaces;
using InventoryAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace InventoryAPI.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class ItemsController : Controller
    {
        private readonly IItemsRepository _itemsRepository;

        public ItemsController(IItemsRepository itemsRepository)
        {
            _itemsRepository = itemsRepository;
        }

        [HttpPost]
        public IActionResult CreateItem([FromBody] Item item)
        {
            return Created(item.Id.ToString(), item);
        }

        [HttpGet]
        public IActionResult GetItems(int? id, string brand)
        {
            // Get by ID
            if (id.HasValue)
            {
                Item item = _itemsRepository.GetItem(id.Value);
                if (item == null)
                {
                    return NotFound();
                }
                return Ok(item);
            }

            // Get by brand
            if (!string.IsNullOrEmpty(brand))
            {
                return Ok(_itemsRepository.GetStockItems(brand));
            }

            // Get all products/items
            List<Item> items = _itemsRepository.GetItems();
            return Ok(items);
        }

        [HttpPut]
        public IActionResult UpdateItem([FromBody] Item updatedItem)
        {
            Item oldItem= _itemsRepository.GetItem(updatedItem.Id);
            if (oldItem == null)
            {
                return NotFound();
            }

            return Ok(_itemsRepository.UpdateItem(updatedItem));
        }


        [HttpDelete]
        public IActionResult DeleteItem(int itemId)
        {
            Item item = _itemsRepository.GetItem(itemId);
            if (item == null)
            {
                return NotFound();
            }

            _itemsRepository.DeleteItem(itemId);

            return Ok();
        }
    }
}