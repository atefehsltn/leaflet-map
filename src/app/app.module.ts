import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMapComponent } from './first-map/first-map.component';
import { SecoundMapComponent } from './secound-map/secound-map.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ThirdMapComponent } from './third-map/third-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateRecordComponent } from './components/create-record/create-record.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditRecordComponent } from './components/edit-record/edit-record.component';
import { RemoveRecordComponent } from './components/remove-record/remove-record.component';
import { ShowDialogComponent } from './components/show-dialog/show-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstMapComponent,
    SecoundMapComponent,
    ThirdMapComponent,
    CreateRecordComponent,
    EditRecordComponent,
    RemoveRecordComponent,
    ShowDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
