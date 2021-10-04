import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuadrinhosNovoRoutingModule } from './quadrinhos-novo-routing.module';
import { QuadrinhosNovoComponent } from './quadrinhos-novo.component';
import { MatButtonModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuadrinhosNovoComponent],
  imports: [
    CommonModule,
    QuadrinhosNovoRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})
export class QuadrinhosNovoModule { }
