import { Component, OnInit } from '@angular/core';
import { SuppliersTableComponent } from '../suppliers/suppliers-table/suppliers-table.component';
import { ItemsTableComponent } from '../items/items-table/items-table.component';
import { OrdersTableComponent } from '../orders/orders-table/orders-table.component';
import { UsersTableComponent } from '../users/users-table/users-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { Item, User } from 'src/app/models';
import { UsersService } from 'src/app/services/users.service';
import { ItemsService } from 'src/app/services/items.service';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Item>();
  
  constructor(private usersService: UsersService, private itemsService: ItemsService, private suppliersService: SuppliersService, private ordersService: OrdersService) { }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
  
  }

}
