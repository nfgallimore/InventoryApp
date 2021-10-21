using InventoryAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using InventoryAPI.Entities;
using InventoryAPI.ViewModels;

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
        public IActionResult CreateItem([FromBody] ItemViewModel item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            int id = _itemsRepository.CreateItem(item.ToEntity());
            return Created(id.ToString(), item);
        }

        [HttpGet]
        public IActionResult GetItems()
        {
            List<Item> items = _itemsRepository.GetItems();
            return Ok(items);
        }

        [HttpPut]
        public IActionResult UpdateItem([FromBody] ItemViewModel updatedItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            Item oldItem = _itemsRepository.GetItem(updatedItem.Id);
            if (oldItem == null)
            {
                return NotFound();
            }

            return Ok(_itemsRepository.UpdateItem(updatedItem.ToEntity()));
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