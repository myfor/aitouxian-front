import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';

const newRoutes: Routes = [
  { path: '', component: PostComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(newRoutes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
