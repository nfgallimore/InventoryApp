using Microsoft.AspNetCore.Mvc;
using InventoryAPI.Interfaces;
using System.Collections.Generic;
using InventoryAPI.Models;
using InventoryAPI.ViewModels;


namespace InventoryAPI.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUsersRepository _usersRepository;

        public UsersController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] UserViewModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            long id = _usersRepository.CreateUser(user.ToEntity());
            return Created(id.ToString(), user);
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            List<User> users = _usersRepository.GetUsers();
            return Ok(users);
        }

        [HttpPut]
        public IActionResult UpdateUser([FromBody] UserViewModel updatedUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            User oldUser = _usersRepository.GetUser(updatedUser.Id);
            if (oldUser == null)
            {
                return NotFound();
            }

            return Ok(_usersRepository.UpdateUser(updatedUser.ToEntity()));
        }


        [HttpDelete]
        public IActionResult DeleteUser(int userId)
        {
            User user = _usersRepository.GetUser(userId);
            if (user == null)
            {
                return NotFound();
            }

            _usersRepository.DeleteUser(userId);

            return Ok();
        }
    }
}
