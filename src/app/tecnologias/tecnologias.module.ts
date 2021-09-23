import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiasRoutingModule } from './tecnologias-routing.module';
import { TecnologiasComponent } from './tecnologias.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSnackBarModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TecnologiasComponent],
  imports: [
    CommonModule,
    TecnologiasRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class TecnologiasModule { }
