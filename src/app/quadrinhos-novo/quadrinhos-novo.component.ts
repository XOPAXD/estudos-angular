import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadFileService } from '../upload-file/upload-file.service';
import { uploadProgress, filterResponse } from '../shared/rxjs-operators';
import { MatSnackBar } from '@angular/material';
import { QuadrinhosService } from '../services/quadrinhos.service';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/utils/format-datepicker';
import { Quadrinhos } from '../models/Quadrinhos';

@Component({
  selector: 'app-quadrinhos-novo',
  templateUrl: './quadrinhos-novo.component.html',
  styleUrls: ['./quadrinhos-novo.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class QuadrinhosNovoComponent implements OnInit {
  files: Set<File>;
  progress = 0;
  file:any;

  Quadrinho: Quadrinhos = {
    nome:'',
    descricao:'',
    dataPublicacao:'',
    urlImage:''
  };

  constructor(private router: Router,private servicefile: UploadFileService, private _snackBar: MatSnackBar,private service: QuadrinhosService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    console.log(this.file[0].name);

    this.Quadrinho.nome = form.value.nome
    this.Quadrinho.descricao = form.value.descricao
    this.Quadrinho.dataPublicacao = form.value.dataPublicacao
    this.Quadrinho.urlImage = 'uploads/'+this.file[0].name;

    this.service.create(this.Quadrinho).subscribe((resposta) => {
      this.onUpload();
      let snack = this._snackBar.open("Salvo com Sucesso!", "OK", {
        horizontalPosition: "center",
        verticalPosition: "top",
      });
    });
  }

  voltar() {
    this.router.navigate(["quadrinhos"]);
  }

  onChange(event) {
    let selectedFile = <FileList>event.srcElement.files;
    this.files = new Set();
    console.log(selectedFile)
    for (let i = 0; i < selectedFile.length; i++) {
      this.files.add(selectedFile[i]);
    }

    this.progress = 0;
    this.file = selectedFile;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      console.log("dentro files.:" + this.files)
      this.servicefile.upload(this.files, '/api/upload')
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
      }
  }
}
