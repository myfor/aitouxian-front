import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './home/index/index.component';
import { ContentListComponent } from './home/content-list/content-list.component';

import {
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatButtonModule,
  MatProgressBarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatButtonModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
