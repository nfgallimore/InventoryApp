import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {

  supplierForm = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
    address: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<SupplierFormComponent>) { }

  ngOnInit() {
    if (this.data) {
      this.supplierForm.patchValue({
        name: this.data.name,
        contact: this.data.contact,
        address: this.data.address
      });
    }
  }

  onSubmit() {
    if (this.data) {
      this.supplierForm.addControl('id', new FormControl(this.data.id))
    }
    this.dialogRef.close(this.supplierForm.value);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
