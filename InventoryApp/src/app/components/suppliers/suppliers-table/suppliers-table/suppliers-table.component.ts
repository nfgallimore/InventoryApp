import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { MatDialog } from '@angular/material';
import { SupplierFormComponent } from '../../supplier-form/supplier-form/supplier-form.component';
import { ConfirmComponent } from 'src/app/components/confirm/confirm.component';

@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  styleUrls: ['./suppliers-table.component.css']
})
export class SuppliersTableComponent implements OnInit {

  suppliers: Supplier[];
  displayedColumns: string[] = ['id', 'name', 'contact', 'address', 'actions'];

  constructor(private suppliersService: SuppliersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getSuppliers();
  }

  onEdit(supplier): void {
    this.dialog.open(SupplierFormComponent, {
      width: '500px',
      data: supplier,
    }).afterClosed().subscribe(supplier => {
      if (supplier) {
        this.suppliersService.updateSupplier(supplier.subscribe(() => {
          this.getSuppliers();
        }));
      }
    });
}

  onDelete(id): void {
    this.dialog.open(ConfirmComponent, {
      width: '500px',
      data: 'Are you sure you want to delete supplier?'
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.suppliersService.deleteSupplier(id).subscribe(() => {
          this.getSuppliers();
        });
      }
    });
  }

  getSuppliers() {
    this.suppliersService.getSuppliers().subscribe((suppliers: Supplier[]) => {
      this.suppliers = suppliers;
    });
  }
}