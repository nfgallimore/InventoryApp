using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using InventoryAPI.Interfaces;
using InventoryAPI.Models;

namespace InventoryAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdersController : Controller
    {
        private readonly IOrdersRepository _ordersRepository;

        public OrdersController(IOrdersRepository ordersRepository)
        {
            _ordersRepository = ordersRepository;
        }

        [HttpGet]
        public IActionResult GetOrders()
        {
            List<Order> orders = _ordersRepository.GetOrders();
            return Ok(orders);
        }
    }
}
