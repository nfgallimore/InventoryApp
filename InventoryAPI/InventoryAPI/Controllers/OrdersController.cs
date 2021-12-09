using System.Collections.Generic;
using InventoryAPI.Models;
using Microsoft.AspNetCore.Mvc;
using InventoryAPI.Interfaces;
using InventoryAPI.ViewModels;

namespace InventoryAPI.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class OrdersController : Controller
    {
        private readonly IOrdersRepository _ordersRepository;

        public OrdersController(IOrdersRepository ordersRepository)
        {
            _ordersRepository = ordersRepository;
        }

        [HttpPost]
        public IActionResult CreateOrder([FromBody] OrderViewModel order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            long id = _ordersRepository.CreateOrder(order.ToEntity());
            return Created(id.ToString(), order);
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            // Get all orders
            List<Order> orders = _ordersRepository.GetOrders();
            return Ok(orders);
        }

        [HttpPut]
        public IActionResult UpdateOrder([FromBody] OrderViewModel updatedOrder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            Order oldOrder = _ordersRepository.GetOrder(updatedOrder.Id);
            if (oldOrder == null)
            {
                return NotFound();
            }

            return Ok(_ordersRepository.UpdateOrder(updatedOrder.ToEntity()));
        }


        [HttpDelete]
        public IActionResult DeleteOrder(int id)
        {
            Order order = _ordersRepository.GetOrder(id);
            if (order == null)
            {
                return NotFound();
            }

            _ordersRepository.DeleteOrder(id);

            return Ok();
        }
    }
}
