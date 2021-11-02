import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SupplierFormComponent } from 'src/app/components/suppliers/supplier-form/supplier-form.component';
import { SuppliersTableComponent } from 'src/app/components/suppliers/suppliers-table/suppliers-table.component';
import { SuppliersService } from 'src/app/services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent {

  @ViewChild(SuppliersTableComponent) suppliersTable: SuppliersTableComponent;

  constructor( public dialog: MatDialog, private suppliersService: SuppliersService) { }

  onCreate(): void {
    this.dialog.open(SupplierFormComponent, {
      width: '500px',
      data: null,
    }).afterClosed().subscribe(supplier => {
      if (supplier) {
        this.suppliersService.createSupplier(supplier).subscribe(() => this.suppliersTable.getSuppliers());
      }
    });
  }

}
