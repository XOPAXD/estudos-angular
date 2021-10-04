import { TecnologiasService } from "./../services/tecnologias.service";
import { Tecnologias } from "./../models/Tecnologias";
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import {
  MatDialog,
  MatPaginator,
  MatSnackBar,
  MatTableDataSource,
} from "@angular/material";
import { ComponentModalComponent } from "../component-modal/component-modal.component";
import { Router } from "@angular/router";
import { format } from "url";

@Component({
  selector: "app-tecnologias",
  templateUrl: "./tecnologias.component.html",
  styleUrls: ["./tecnologias.component.scss"],
})
export class TecnologiasComponent implements OnInit {
  textButton: string;

  tecnologia: Tecnologias = {
    titulo: "",
    descricao: "",
    data:""
  };

  lista: Tecnologias[] = [];

  displayedColumns: string[] = ["titulo", "descricao","data","actions"];
  dataSource = new MatTableDataSource(this.lista);
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(
    private service: TecnologiasService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.textButton = "NOVO";
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.lista = resposta;
      this.dataSource = new MatTableDataSource(this.lista);
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  visualizar(id) {
    this.lista.forEach((element) => {
      if (element.id == id) {
        this.dialog.open(ComponentModalComponent, {
          data: {
            id: element.id,
            titulo: element.titulo,
            descricao: element.descricao,
          },
        });
      }
    });
  }

  update(id) {
    this.textButton = "ATUALIZAR";
    this.service.findById(id).subscribe((resposta) => {
      this.tecnologia = resposta;
      console.log(
        "to com o registro aqui!.:" + JSON.stringify(this.tecnologia.titulo)
      );
    });
  }

  delete(id){
    this.textButton = "EXCLUIR";
    this.service.findById(id).subscribe((resposta) => {
      this.tecnologia = resposta;
      console.log(
        "to com o registro aqui!.:" + JSON.stringify(this.tecnologia.titulo)
      );
    });
  }
  onSubmit(form) {
    console.log(form.value);

    if (form.status != "INVALID") {
      if(this.textButton == "EXCLUIR"){
          console.log(" vou excluir o registro!.:"+form.value.id)
          this.service.delete(form.value.id).subscribe((resposta) => {
            let snack = this._snackBar.open("Exluído com Sucesso!", "OK", {
              horizontalPosition: "center",
              verticalPosition: "top",
            });
            snack.onAction().subscribe(() => {
              //location.reload()
              this.findAll();
              form.resetForm();
              this.textButton = "NOVO";
            });
          });
      }
      else{
        this.service.create(form.value).subscribe((resposta) => {
          let snack = this._snackBar.open("Salvo com Sucesso!", "OK", {
            horizontalPosition: "center",
            verticalPosition: "top",
          });
          snack.onAction().subscribe(() => {
            //location.reload()
            this.findAll();
            form.resetForm();
            this.textButton = "NOVO";
          });
        });
      }
    }
  }

  cancelar(form){
    console.log("to cancelando???")
    form.resetForm();
    this.textButton = "NOVO";
  }
}
