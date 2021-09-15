import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveSearch2Component } from './reactive-search2.component';

const routes: Routes = [{
  path:'',
  component:ReactiveSearch2Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveSearch2RoutingModule { }
