using InventoryAPI.Models;

namespace InventoryAPI.ViewModels
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Contact { get; set; }

        public User ToEntity()
        {
            return new User
            {
                Id = Id,
                Name = Name,
                Username = Username,
                Email = Email,
                Password = Password,
                Contact = Contact,
            };
        }
    }
}
