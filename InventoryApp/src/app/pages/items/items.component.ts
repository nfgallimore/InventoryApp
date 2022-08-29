import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemFormComponent } from 'src/app/components/items/item-form/item-form.component';
import { ItemsTableComponent } from 'src/app/components/items/items-table/items-table.component';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @ViewChild(ItemsTableComponent) itemsTable: ItemsTableComponent;

  constructor(public dialog: MatDialog, private itemsService: ItemsService) { }

  onCreate(): void {
    this.dialog.open(ItemFormComponent, {
      width: '500px',
      data: null,
    }).afterClosed().subscribe(item => {
      if (item) {
        this.itemsService.createItem(item).subscribe(() => this.itemsTable.getItems());
      }
    });
  }

}