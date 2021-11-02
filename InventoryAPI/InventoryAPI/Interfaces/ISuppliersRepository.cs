using System;
using System.Collections.Generic;
using InventoryAPI.Entities;

namespace InventoryAPI.Interfaces
{
    public interface ISuppliersRepository
    {
        List<Supplier> GetSuppliers();

        Supplier GetSupplier(int id);

        List<Supplier> GetUserSuppliers(string name);

        int CreateSupplier(Supplier supplier);

        Supplier UpdateSupplier(Supplier supplier);

        void DeleteSupplier(int id);
    }
}
