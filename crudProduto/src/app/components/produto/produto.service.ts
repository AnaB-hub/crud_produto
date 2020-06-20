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
    return this.http.get(`${url}/ativos`);
  }

  findById(id) {
    return this.http.get(`${url}/${id}`);
  }

  alterar(formulario) {
    return this.http.put(`${url}`, formulario);
  }

  excluir(id) {
    return this.http.get(`${url}/delete/${id}`);
  }
}
