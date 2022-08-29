import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Supplier } from 'src/app/models';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { SupplierFormComponent } from 'src/app/components/suppliers/supplier-form/supplier-form.component';

@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  styleUrls: ['./suppliers-table.component.css']
})
export class SuppliersTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'contact', 'address', 'actions'];

  public dataSource = new MatTableDataSource<Supplier>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private suppliersService: SuppliersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getSuppliers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onEdit(supplier): void {
    this.dialog.open(SupplierFormComponent, {
      width: '500px',
      data: supplier,
    }).afterClosed().subscribe(supplier => {
      if (supplier) {
        this.suppliersService.updateSupplier(supplier).subscribe(() => {
          this.getSuppliers();
        });
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
    this.suppliersService.getSuppliers().subscribe((suppliers => {
      this.dataSource.data = suppliers as Supplier[];
    }));
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}