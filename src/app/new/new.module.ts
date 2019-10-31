import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
