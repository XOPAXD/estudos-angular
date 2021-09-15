import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

export interface Tecnologia {
  id?: any;
  descricao: any;
  checked: boolean;
}

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.scss"],
})
export class FormularioComponent implements OnInit {
  tecnologias: Tecnologia[] = [];

  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    this.listarTecnologias();
  }

  onSubmit(form) {
    this.tecnologias
      .map((checkbox) => checkbox.id)
      .filter((checkbox) => checkbox.checked == true);
    console.log(this.tecnologias);
    console.log(form.value);
    if (form.status != "INVALID") {
      // this._snackBar.open("Salvo com Sucesso!", "OK", {
      //   horizontalPosition: "center",
      //   verticalPosition: "top",
      // });

      let snack = this._snackBar.open("Salvo com Sucesso!", "OK", {
        horizontalPosition: "center",
        verticalPosition: "top",
      });
      snack.afterDismissed().subscribe(() => {
        this.router.navigate(["reactive-search"]);
      });
      // snack.onAction().subscribe(() => {
      //   console.log("This will be called when snackbar button clicked");
      // });
    }
  }

  listarTecnologias(): void {
    this.tecnologias = JSON.parse(
      '[{"id":"angular","descricao":"angular","checked":false},{"id":"java","descricao":"java","checked":false},{"id":"php","descricao":"php","checked":false},{"id":"phyton","descricao":"phyton","checked":false}]'
    );
  }

  voltar() {
    this.router.navigate(["reactive-search"]);
  }
}
