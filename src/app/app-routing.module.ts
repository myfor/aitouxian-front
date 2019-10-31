import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './home/index/index.component';
import { NewComponent } from './home/new/new.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  {
    path: 'new',
    component: NewComponent,
    loadChildren: () => import('./new/new.module').then(mod => mod.NewModule)
  },
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
