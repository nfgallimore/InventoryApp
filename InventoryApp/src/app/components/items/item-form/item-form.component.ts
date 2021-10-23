import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    model: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    total: new FormControl('')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<ItemFormComponent>) { 
  }

  ngOnInit() {
    if (this.data) {
      this.itemForm.patchValue({
        name: this.data.name,
        brand: this.data.brand,
        model: this.data.model,
        price: this.data.price,
        quantity: this.data.quantity,
        total: this.data.total
      });
    }
  }

  onSubmit() {
    // add item id as a form control since it is uneditable on the view
    if (this.data) {
      this.itemForm.addControl('id', new FormControl(this.data.id))
    }
    this.dialogRef.close(this.itemForm.value);
  }

  onCancel() {
    this.dialogRef.close();
  }

}