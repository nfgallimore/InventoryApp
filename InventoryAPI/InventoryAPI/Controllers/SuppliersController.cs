using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using InventoryAPI.Entities;
using InventoryAPI.Interfaces;
using InventoryAPI.ViewModels;

namespace InventoryAPI.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class SuppliersController : Controller
    {
        private readonly ISuppliersRepository _suppliersRepository;

        public SuppliersController(ISuppliersRepository suppliersRepository)
        {
            _suppliersRepository = suppliersRepository;

        }

        [HttpPost]
        public IActionResult CreateSupplier([FromBody] SupplierViewModel supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            int id = _suppliersRepository.CreateSupplier(supplier.ToEntity());
            return Created(id.ToString(), supplier);
        }

        [HttpGet]
        public IActionResult GetSuppliers()
        {
            List<Supplier> suppliers = _suppliersRepository.GetSuppliers();
            return Ok(suppliers);
        }

        [HttpPut]
        public IActionResult UpdateSupplier([FromBody] SupplierViewModel updateSupplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            Supplier supplier = _suppliersRepository.GetSupplier(updateSupplier.Id);
            if (supplier == null)
            {
                return NotFound();
            }

            return Ok(_suppliersRepository.UpdateSupplier(updateSupplier.ToEntity()));
        }

        [HttpDelete]
        public IActionResult DeleteSupplier(int id)
        {
            Supplier supplier = _suppliersRepository.GetSupplier(id);
            if (supplier == null)
            {
                return NotFound();
            }

            _suppliersRepository.DeleteSupplier(id);

            return Ok();
        }
    }
}
