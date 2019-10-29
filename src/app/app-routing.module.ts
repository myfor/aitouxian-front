import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './home/index/index.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }
