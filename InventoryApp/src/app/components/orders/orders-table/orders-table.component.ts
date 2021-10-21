import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models';
import { OrdersService } from 'src/app/services/orders.service';
import { MatDialog } from '@angular/material';
import { OrderFormComponent } from '../order-form/order-form.component';
import { ConfirmComponent } from '../../confirm/confirm.component';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  orders: Order[];
  displayedColumns: string[] = ['id', 'name', 'contact', 'itemId', 'quantity', 'price', 'total', 'actions'];

  constructor(private ordersService: OrdersService, public dialog: MatDialog) { }

  ngOnInit() {
    // get orders from ordersService
    this.ordersService.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  onEdit(order): void {
    this.dialog.open(OrderFormComponent, {
      width: '500px',
      data: order,
    }).afterClosed().subscribe(order => {
      if (order) {
        this.ordersService.updateOrder(order).subscribe();
      }
    });
  }

  onDelete(id): void {
    this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: 'Are you sure you want to delete this order?'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.ordersService.deleteOrder(id).subscribe();
      }
    });
  }

}
