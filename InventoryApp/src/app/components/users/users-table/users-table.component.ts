import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models';
import { UserFormComponent } from '../user-form/user-form.component';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmComponent } from '../../confirm/confirm.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'contact', 'actions']; 
  
  public dataSource = new MatTableDataSource<User>();
  
  constructor(private usersService: UsersService, public dialog: MatDialog) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngOnInit() {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onEdit(user): void {
    this.dialog.open(UserFormComponent, {
      width: '500px',
      data: user,
    }).afterClosed().subscribe(user => {
      if (user) {
        this.usersService.updateUser(user).subscribe(() => {
          this.getUsers();
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
        this.usersService.deleteUser(id).subscribe(() => {
          this.getUsers();
        });
      }
    });
  }

  getUsers() {
    this.usersService.getUsers().subscribe((users => {
      this.dataSource.data = users as User[];
    }));
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
