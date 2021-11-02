using System;
using System.Collections.Generic;
using System.Linq;
using InventoryAPI.Interfaces;
using Microsoft.EntityFrameworkCore;
using InventoryAPI.Entities;

namespace InventoryAPI.Repositories
{
    public class SuppliersRepository : ISuppliersRepository
    {
        private readonly InventoryDBContext _context;

        public SuppliersRepository(InventoryDBContext context)
        {
            _context = context;
        }

        public List<Supplier> GetSuppliers()
        {
            return _context.Suppliers.ToList();
        }

        public Supplier GetSupplier(int id)
        {
            return _context.Suppliers.FirstOrDefault(x => x.Id == id);
        }

        public List<Supplier> GetUserSuppliers(string name)
        {
            return _context.Suppliers.Where(supplier => string.Equals(supplier.Name, name, StringComparison.CurrentCultureIgnoreCase)).ToList();
        }

        public int CreateSupplier(Supplier supplier)
        {
            _context.Suppliers.Add(supplier);
            _context.SaveChanges();
            return supplier.Id;
        }

        public Supplier UpdateSupplier(Supplier supplier)
        {
            Supplier dbSupplier = _context.Suppliers.Find(supplier.Id);
            dbSupplier.Name = supplier.Name;
            dbSupplier.Contact = supplier.Contact;
            dbSupplier.Address = supplier.Address;

            _context.Entry(dbSupplier).State = EntityState.Modified;
            _context.SaveChanges();
            return supplier;
        }

        public void DeleteSupplier(int id)
        {
            _context.Suppliers.Remove(GetSupplier(id));
            _context.SaveChanges();
        }
    }
}
