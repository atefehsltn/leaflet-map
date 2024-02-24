import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMapComponent } from './first-map/first-map.component';
import { SecoundMapComponent } from './secound-map/secound-map.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { ThirdMapComponent } from './third-map/third-map.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstMapComponent,
    SecoundMapComponent,
    ShowDialogComponent,
    ThirdMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule

  ],
  exports: [
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
