using System.Collections.Generic;
using InventoryAPI.Entities;
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
            int id = _ordersRepository.CreateOrder(order.ToEntity());
            return Created(id.ToString(), order);
        }

        [HttpGet]
        public IActionResult GetOrders(int? id, string name)
        {
            // Get by ID
            if (id.HasValue)
            {
                Order order = _ordersRepository.GetOrder(id.Value);
                if (order == null)
                {
                    return NotFound();
                }
                return Ok(order);
            }

            // Get by name
            if (!string.IsNullOrEmpty(name))
            {
                return Ok(_ordersRepository.GetUserOrders(name));
            }

            // Get all orders
            List<Order> orders = _ordersRepository.GetOrders();
            return Ok(orders);
        }

        [HttpPut]
        public IActionResult UpdateOrder([FromBody] OrderViewModel updatedOrder)
        {
            Order oldOrder = _ordersRepository.GetOrder(updatedOrder.Id);
            if (oldOrder == null)
            {
                return NotFound();
            }

            return Ok(_ordersRepository.UpdateOrder(updatedOrder.ToEntity()));
        }


        [HttpGet("Delete")]
        public IActionResult DeleteOrder(int orderId)
        {
            Order order = _ordersRepository.GetOrder(orderId);
            if (order == null)
            {
                return NotFound();
            }

            _ordersRepository.DeleteOrder(orderId);

            return Ok();
        }
    }
}
