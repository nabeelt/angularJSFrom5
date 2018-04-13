import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View3Component } from './view3/view3.component';

const routes: Routes = [
  {path: 'view3', component: View3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }