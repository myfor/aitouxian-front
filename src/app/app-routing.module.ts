import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './home/index/index.component';

const appRoutes: Routes = [
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then(mod => mod.NewModule)
  },
  { path: '', component: IndexComponent },
  { path: "**", redirectTo: '' }
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
