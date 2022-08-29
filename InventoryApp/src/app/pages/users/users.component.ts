import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersTableComponent } from 'src/app/components/users/users-table/users-table.component';
import { UserFormComponent } from 'src/app/components/users/user-form/user-form.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  @ViewChild(UsersTableComponent) usersTable: UsersTableComponent;

  constructor( public dialog: MatDialog, private usersService: UsersService) { }

  onCreate(): void {
    this.dialog.open(UserFormComponent, {
      width: '500px',
      data: null,
    }).afterClosed().subscribe(user => {
      if (user) {
        this.usersService.createUser(user).subscribe(() => this.usersTable.getUsers());
      }
    });
  }

}
