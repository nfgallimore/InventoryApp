import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<ConfirmComponent>) {
    this.message = data.message;
  }

  onOk() {
    this.dialogRef.close({ confirmed: true });
  }

  onCancel() {
    this.dialogRef.close({ confirmed: false });
  }
}
