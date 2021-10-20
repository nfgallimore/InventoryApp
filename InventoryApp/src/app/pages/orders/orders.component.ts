import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models';
import { OrdersService } from '../../shared/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  displayedColumns: string[] = ['id', 'name', 'contact', 'itemId', 'quantity', 'price', 'total'];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    // get orders from ordersService
    this.ordersService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }
}
