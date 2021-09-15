import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { ReactiveSearchComponent } from './reactive-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [ReactiveSearchComponent],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,

  ]

})
export class ReactiveSearchModule {  }
