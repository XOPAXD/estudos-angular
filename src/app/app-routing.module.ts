import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'reactive-search'
  },
  {
    path:'upload',
    loadChildren:  () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
  },
  {
    path:'reactive-search',
    loadChildren:  () => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)
  },
  {
    path:'reactive-search2',
    loadChildren:  () => import('./reactive-search2/reactive-search2.module').then(m => m.ReactiveSearch2Module)
  },
  {
    path:'formulario',
    loadChildren:  () => import('./formulario/formulario.module').then(m => m.FormularioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
