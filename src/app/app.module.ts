import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './home/index/index.component';
import { ContentListComponent } from './home/content-list/content-list.component';
import { NewPostComponent } from './home/new-post/new-post.component';

import {
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatMenuModule,
  MatFormFieldModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContentListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...MATERIAL_MODULES,
    FormsModule
  ],
  providers: [],
  entryComponents: [
    NewPostComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
