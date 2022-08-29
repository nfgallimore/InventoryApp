import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Item } from 'src/app/models';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'category', 'description', 'price', 'quantity', 'total', 'supplierId','actions'];

  public dataSource = new MatTableDataSource<Item>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private itemsService: ItemsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getItems();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onEdit(item): void {
    this.dialog.open(ItemFormComponent, {
      width: '500px',
      data: item,
    }).afterClosed().subscribe(item => {
      if (item) {
        this.itemsService.updateItem(item).subscribe(() => {
          this.getItems();
        });
      }
    });
  }

  onDelete(id): void {
    this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: 'Are you sure you want to delete this item?'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.itemsService.deleteItem(id).subscribe(() => {
          this.getItems();
        });
      }
    });
  }

  getItems() {
    this.itemsService.getItems().subscribe((items => {
      this.dataSource.data = items as Item[];
    }));
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
