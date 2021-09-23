import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Tecnologias } from "../models/Tecnologias";

@Injectable({
  providedIn: "root",
})
export class TecnologiasService {
  baseURL: String = environment.baseURL;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Tecnologias[]> {
    const url = this.baseURL + "/tecnologias/";
    return this.http.get<Tecnologias[]>(url);
  }

  create(tec: Tecnologias): Observable<Tecnologias> {
    console.log("objetos chegando no servico.:" + JSON.stringify(tec));
    const url = this.baseURL + "/tecnologia/";
    return this.http.post<Tecnologias>(url, tec);
  }

  findById(id: any): Observable<Tecnologias> {
    const url = this.baseURL + "/tecnologia/" + id;
    return this.http.get<Tecnologias>(url);
  }

  delete(id:any):Observable<void>{
    const url = this.baseURL + "/tecnologia/"+id;
    return this.http.delete<void>(url);
  }
}
