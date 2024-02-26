import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-record',
  templateUrl: './remove-record.component.html',
  styleUrls: ['./remove-record.component.scss']
})
export class RemoveRecordComponent {
  result:boolean = false;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RemoveRecordComponent>,
  ){}

  removeData(){
    this.result = true
    this.dialogRef.close(this.result)
  }
}
