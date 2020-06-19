import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";

const url = `${environment.apiBaseUrl}/produtos`;

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  salvar(formulario) {
    return this.http.post(url, formulario);
  }

  consultar() {
    return this.http.get(url);
  }
}
