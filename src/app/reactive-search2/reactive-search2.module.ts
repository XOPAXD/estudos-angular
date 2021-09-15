import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveSearch2RoutingModule } from './reactive-search2-routing.module';
import { ReactiveSearch2Component } from './reactive-search2.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveSearch2Component],
  imports: [
    CommonModule,
    ReactiveSearch2RoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveSearch2Module { }
