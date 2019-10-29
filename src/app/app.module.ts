import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './home/index/index.component';

import {
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
