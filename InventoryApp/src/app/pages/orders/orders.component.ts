import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderFormComponent } from 'src/app/components/orders/order-form/order-form.component';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor(public dialog: MatDialog, private ordersService: OrdersService) { }

  onCreate(): void {
    this.dialog.open(OrderFormComponent, {
      width: '500px',
      data: null,
    }).afterClosed().subscribe(order => {
      if (order) {
        this.ordersService.createOrder(order).subscribe();
      }
    });
  }
}
