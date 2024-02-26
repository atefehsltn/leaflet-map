import { Component, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.scss']
})
export class EditRecordComponent {
  editFrm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditRecordComponent>,
  ){}

  ngOnInit(): void {
    this.creatFrm();
  }


  creatFrm(){
    this.editFrm = this.formBuilder.group({
      title:['', Validators.required],
      Address:['', Validators.required],
      lat: this.data.lat,
      lng: this.data.lng
    })
  }

  editData(){
    this.dialogRef.close(this.editFrm)
  }
}
