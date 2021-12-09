using System;
using System.Collections.Generic;
using InventoryAPI.Models;

namespace InventoryAPI.Interfaces
{
    public interface ISuppliersRepository
    {
        List<Supplier> GetSuppliers();

        Supplier GetSupplier(long id);

        List<Supplier> GetUserSuppliers(string name);

        long CreateSupplier(Supplier supplier);

        Supplier UpdateSupplier(Supplier supplier);

        void DeleteSupplier(long id);
    }
}
