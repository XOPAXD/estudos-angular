import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MatFormFieldModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class UploadFileModule { }
