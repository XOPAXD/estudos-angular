import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Quadrinhos } from "../models/Quadrinhos";

@Injectable({
  providedIn: "root",
})
export class QuadrinhosService {
  baseURL: String = environment.baseURL;

  constructor(private http: HttpClient) {}

  create(quadrinhos: Quadrinhos): Observable<Quadrinhos> {
    console.log("objetos chegando no servico.:" + JSON.stringify(quadrinhos));
    const url = this.baseURL + "/quadrinho/";
    return this.http.post<Quadrinhos>(url, quadrinhos);
  }

  findAll(): Observable<Quadrinhos[]> {
    const url = this.baseURL + "/quadrinhos/";
    return this.http.get<Quadrinhos[]>(url);
  }
}
