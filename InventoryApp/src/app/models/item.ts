export class Item {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    total: number;
    supplierId: string;
    static fromJsonArray(jsonArray): Item[] {
      const items = [];
  
      jsonArray.forEach(element => {
        const item = new Item();
        item.id = element.id;
        item.category = element.category;
        item.description = element.name+" "+element.description;
        item.price = element.price;
        item.quantity = element.quantity;
        item.total = item.price*item.quantity;
        item.supplierId = element.supplierId;
        items.push(item);
      });
  
      return items;
    }
  }