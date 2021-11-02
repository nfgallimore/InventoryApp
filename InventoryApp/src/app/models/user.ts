export class User {
    id: number;
    name: string;
    contact: string;
    address: string;
    static fromJsonArray(jsonArray): User[] {
      const users = [];
  
      jsonArray.forEach(element => {
        const user = new User();
        user.id = element.id;
        user.name = element.name;
        user.contact = element.contact;
        user.address = element.address;
      });
  
      return users;
    }
  }