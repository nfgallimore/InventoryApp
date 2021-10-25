export class Item {
    id: number;
    name: string;
    brand: string;
    model: string;
    price: number;
    quantity: number;
    total: number;
    static fromJsonArray(jsonArray): Item[] {
      const items = [];
  
      jsonArray.forEach(element => {
        const item = new Item();
        item.id = element.id;
        item.name = element.name;
        item.brand = element.brand;
        item.model = element.model;
        item.price = element.price;
        item.quantity = element.quantity;
        item.total = item.price*item.quantity;
        items.push(item);
      });
  
      return items;
    }
  }