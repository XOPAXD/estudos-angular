import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuadrinhosRoutingModule } from './quadrinhos-routing.module';
import { QuadrinhosComponent } from './quadrinhos.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatPaginatorModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [QuadrinhosComponent],
  imports: [
    CommonModule,
    QuadrinhosRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatPaginatorModule,
    NgxPaginationModule
  ]
})
export class QuadrinhosModule { }
