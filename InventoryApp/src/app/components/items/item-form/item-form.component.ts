import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemForm = new FormGroup({
    category: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    supplierId: new FormControl('')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<ItemFormComponent>) { 
  }

  ngOnInit() {
    if (this.data) {
      this.itemForm.patchValue({
        category: this.data.category,
        name: this.data.name,
        description: this.data.description,
        price: this.data.price,
        quantity: this.data.quantity,
        total: this.data.price*this.data.quantity,
        supplierId: this.data.supplierId
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