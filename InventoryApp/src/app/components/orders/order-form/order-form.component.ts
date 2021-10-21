import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<OrderFormComponent>) { 
  }

  ngOnInit() {
    if (this.data) {
      this.orderForm.patchValue({
        name: this.data.name,
        contact: this.data.contact,
        itemId: this.data.itemId,
        quantity: this.data.quantity,
        price: this.data.price,
        total: this.data.total
      });
    }
  }

  onSubmit() {
    // add order id as a form control since it is uneditable on the view
    if (this.data) {
      this.orderForm.addControl('id', new FormControl(this.data.id))
    }
    this.dialogRef.close(this.orderForm.value);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
