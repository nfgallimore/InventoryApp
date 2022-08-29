using System;
using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface IUsersRepository
    {
        List<User> GetUsers();

        User GetUser(long id);

        List<User> GetAllUsers(string name);

        long CreateUser(User user);

        User UpdateUser(User user);

        void DeleteUser(long id);
    }
}

