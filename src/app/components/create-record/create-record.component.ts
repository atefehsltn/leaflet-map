import { Component, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.scss']
})
export class CreateRecordComponent {
  addFrm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateRecordComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    this.createFrom();
  }

  createFrom(){
    this.addFrm = this.formBuilder.group({
      placeType:['h', Validators.required],
      title: ['', Validators.required],
      Address: ['', Validators.required],
      lat: this.data.lat,
      lng: this.data.lng,
      isDeleted: false,
    })
  }

  saveData(){
    this.dialogRef.close(this.addFrm)
  }
}
