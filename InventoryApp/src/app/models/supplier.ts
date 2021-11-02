export class Supplier {
    id: number;
    name: string;
    contact: string;
    address: string;
    static fromJsonArray(jsonArray): Supplier[] {
      const suppliers = [];
  
      jsonArray.forEach(element => {
        const supplier = new Supplier();
        supplier.id = element.id;
        supplier.name = element.name;
        supplier.contact = element.contact;
        supplier.address = element.address;
        suppliers.push(supplier);
      });
  
      return suppliers;
    }
  }