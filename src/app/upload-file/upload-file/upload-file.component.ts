import { HttpEvent, HttpEventType } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;
  progress = 0;
  constructor(private service: UploadFileService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onChange(event) {
    const selectedFile = <FileList>event.srcElement.files;
    this.files = new Set();
    console.log(selectedFile)
    for (let i = 0; i < selectedFile.length; i++) {
      this.files.add(selectedFile[i]);
    }

    this.progress = 0;
  }

  onUpload() {
    console.log("fora files.:" + this.files.size)
    if (this.files && this.files.size > 0) {
      console.log("dentro files.:" + this.files)
      this.service.upload(this.files, '/api/upload')
        .pipe(
          uploadProgress(progress => {
            console.log(progress)
            this.progress = progress
          }),
          filterResponse()
        ).subscribe(res => this._snackBar.open("Upload Concluído!", 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }));
      // .subscribe((event:HttpEvent<Object>) =>{
      //     console.log(event);
      //     if(event.type == HttpEventType.Response){
      //       this._snackBar.open("Upload Concluído!", 'OK', {
      //         horizontalPosition: 'center',
      //         verticalPosition: 'top',
      //       });
      //     }else if(event.type == HttpEventType.UploadProgress){
      //       const uploadPorc = Math.round((event.loaded * 100) / event.total);
      //       console.log("progresso.:"+uploadPorc);
      //       this.progress = uploadPorc;
      //     }
      // })
    }
  }

  onDownloadExcel() {
    this.service.download('/api/DonwloadExcel')
      .subscribe((res: any) => {
        this.service.baixarArquivo(res, 'teste.pdf')
      });
  }

  onDownloadPDF() {
    this.service.download('/api/DonwloadPDF')
      .subscribe((res: any) => {
        this.service.baixarArquivo(res, 'teste2.pdf')

      });
  }
}
