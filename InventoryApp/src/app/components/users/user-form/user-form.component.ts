import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    contact: new FormControl(''),
  });
  
  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<UserFormComponent>) { }

  ngOnInit() {
    if (this.data) {
      this.userForm.patchValue({
        name: this.data.name,
        username: this.data.user,
        email: this.data.email,
        password: this.data.password,
        contact: this.data.contact
      });
    }
  }

  onSubmit() {
    if (this.data) {
      this.userForm.addControl('id', new FormControl(this.data.id))
    }
    this.dialogRef.close(this.userForm.value);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
