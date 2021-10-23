import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialog } from '@angular/material';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ConfirmComponent } from '../../confirm/confirm.component';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {

  items: Item[];
  displayedColumns: string[] = ['id', 'brand', 'model', 'name', 'price', 'quantity', 'total', 'actions'];

  constructor(private itemsService: ItemsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getItems();
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
    this.itemsService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }

}
