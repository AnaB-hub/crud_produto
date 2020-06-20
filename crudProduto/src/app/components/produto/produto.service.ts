import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { Produto } from "./model/produto";

const url = `${environment.apiBaseUrl}/produtos`;

@Injectable({
  providedIn: "root",
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  salvar(formulario: Produto) {
    return this.http.post(url, formulario);
  }

  consultar() {
    return this.http.get(`${url}/ativos`);
  }

  findById(id: number) {
    return this.http.get(`${url}/${id}`);
  }

  alterar(formulario: Produto, id: number) {
    return this.http.put(`${url}/${id}`, formulario);
  }

  excluir(id: number) {
    return this.http.get(`${url}/delete/${id}`);
  }
}
