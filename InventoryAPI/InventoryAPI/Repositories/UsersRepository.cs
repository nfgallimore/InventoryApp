using InventoryAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System;
using InventoryAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace InventoryAPI.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly localdbContext _context;

        public UsersRepository(localdbContext context)
        {
            _context = context;
        }
        public List<User> GetUsers()
        {
            return _context.Users.ToList();
        }

        public User GetUser(long id)
        {
            return _context.Users.FirstOrDefault(x => x.Id == id);
        }

        public List<User> GetAllUsers(string name)
        {
            return _context.Users.Where(user => string.Equals(user.Name, name, StringComparison.OrdinalIgnoreCase)).ToList();
        }

        public long CreateUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user.Id;
        }

        public User UpdateUser(User user)
        {
            User dbUser = _context.Users.Find(user.Id);
            dbUser.Name = user.Name;
            dbUser.Username = user.Username;
            dbUser.Email = user.Email;
            dbUser.Password = user.Password;
            dbUser.Contact = user.Contact;
            _context.Entry(dbUser).State = EntityState.Modified;
            _context.SaveChanges();
            return user;
        }

        public void DeleteUser(long id)
        {
            _context.Users.Remove(GetUser(id));
            _context.SaveChanges();
        }
    }
}
