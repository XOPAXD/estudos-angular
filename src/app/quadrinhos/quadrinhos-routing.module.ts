import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuadrinhosComponent } from './quadrinhos.component';

const routes: Routes = [{
  path:'',
  component:QuadrinhosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuadrinhosRoutingModule { }
