import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstMapComponent } from './first-map/first-map.component';
import { SecoundMapComponent } from './secound-map/secound-map.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FirstMapComponent,
    SecoundMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule

  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
