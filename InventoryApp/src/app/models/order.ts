export class Order {
  id: number;
  name: string;
  contact: string;
  itemId: number;
  quantity: number;
  price: number;
  total: number;
  static fromJsonArray(jsonArray): Order[] {
    const orders = [];

    jsonArray.forEach(element => {
      const order = new Order();
      order.id = element.id;
      order.name = element.name;
      order.contact = element.contact;
      order.itemId = element.itemId;
      order.quantity = element.quantity;
      order.price = element.price;
      order.total = element.total;
      orders.push(order);
    });

    return orders;
  }
}