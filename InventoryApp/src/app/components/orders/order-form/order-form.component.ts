import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  orderForm = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    itemId: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    total: new FormControl('')
  });

  constructor(private dialogRef: MatDialogRef<OrderFormComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.orderForm);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
