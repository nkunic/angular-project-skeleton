import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const libraryRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ,
  },
  {
    path: '',
    component: ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(libraryRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }