import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrderFormComponent } from 'src/app/components/orders/order-form/order-form.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  onCreate(): void {
    const dialogRef = this.dialog.open(OrderFormComponent, {
      width: '500px',
      data: null,
    });

    dialogRef.afterClosed().subscribe(result => {
      // do something after closing
    });
  }
}
