import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UploadFileService } from "../upload-file/upload-file.service";
import { uploadProgress, filterResponse } from "../shared/rxjs-operators";
import { MatSnackBar } from "@angular/material";
import { QuadrinhosService } from "../services/quadrinhos.service";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import {
  AppDateAdapter,
  APP_DATE_FORMATS,
} from "src/app/utils/format-datepicker";
import { Quadrinhos } from "../models/Quadrinhos";
import { Observable } from "rxjs";
import { HttpEventType, HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-quadrinhos-novo",
  templateUrl: "./quadrinhos-novo.component.html",
  styleUrls: ["./quadrinhos-novo.component.scss"],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class QuadrinhosNovoComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = "";

  Quadrinho: Quadrinhos = {
    nome: "",
    descricao: "",
    dataPublicacao: "",
    urlImage: "",
  };

  fileInfos: Observable<any>;

  constructor(
    private router: Router,
    private servicefile: UploadFileService,
    private _snackBar: MatSnackBar,
    private service: QuadrinhosService
  ) {}

  ngOnInit() {}

  onSubmit(form) {
    this.onUpload();
    console.log(form.value);
    console.log(this.currentFile);

    this.Quadrinho.nome = form.value.nome;
    this.Quadrinho.descricao = form.value.descricao;
    this.Quadrinho.dataPublicacao = form.value.dataPublicacao;
    this.Quadrinho.urlImage = "../../assets/" + this.currentFile.name;

    this.service.create(this.Quadrinho).subscribe((resposta) => {
      let snack = this._snackBar.open("Salvo com Sucesso!", "OK", {
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      snack.afterDismissed().subscribe(() => {
        this.router.navigate(["quadrinhos"]);
      });
    });
  }

  voltar() {
    this.router.navigate(["quadrinhos"]);
  }

  onChange(event) {
    this.selectedFiles = event.target.files;
  }

  onUpload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.servicefile.uploadFile(this.currentFile).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.servicefile.getFiles();
        }
      },
      (err) => {
        this.progress = 0;
        this.message = "Could not upload the file!";
        this.currentFile = undefined;
      }
    );

    this.selectedFiles = undefined;
  }
}
