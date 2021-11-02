import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/models';
import { OrdersService } from 'src/app/services/orders.service';
import { MatDialog, MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { OrderFormComponent } from '../order-form/order-form.component';
import { ConfirmComponent } from '../../confirm/confirm.component';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'contact', 'itemId', 'quantity', 'price', 'total', 'actions'];

  public dataSource = new MatTableDataSource<Order>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ordersService: OrdersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getOrders();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onEdit(order): void {
    this.dialog.open(OrderFormComponent, {
      width: '500px',
      data: order,
    }).afterClosed().subscribe(order => {
      if (order) {
        this.ordersService.updateOrder(order).subscribe(() => {
          this.getOrders();
        });
      }
    });
  }

  onDelete(id): void {
    this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: 'Are you sure you want to delete this order?'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.ordersService.deleteOrder(id).subscribe(() => {
          this.getOrders();
        });
      }
    });
  }

  getOrders() {
    this.ordersService.getOrders().subscribe((orders => {
      this.dataSource.data = orders as Order[];
    }));
  }

  //public redirectToItem = (id: string) => {
   // let url: string = `/components/items/itemsdetails/${id}`;
   // this.router.navigate([url]);
  //}

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
