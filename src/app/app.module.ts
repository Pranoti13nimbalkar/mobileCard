import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatButtonModule}   from '@angular/material/button';
import{MatIconModule}   from '@angular/material/icon';
import{MatCardModule}   from '@angular/material/card';
import{MatSnackBarModule}   from '@angular/material/snack-bar';
import{MatDialogModule}   from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileCardComponent } from './mobile-card/mobile-card.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent,
    MobileDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
