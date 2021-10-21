import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

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
