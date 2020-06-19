import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { MessageComponent } from "./../../message/message.component";

import * as moment from "moment";
import { ProdutoService } from "./../produto.service";

@Component({
  selector: "app-cadastro-produto",
  templateUrl: "./cadastro-produto.component.html",
  styleUrls: ["./cadastro-produto.component.css"],
})
export class CadastroProdutoComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario(): void {
    this.cadastroForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      qtde: [null, Validators.required],
      validade: [null, Validators.required],
    });
  }

  salvarProduto(): void {
    if (this.cadastroForm.valid) {
      this.produtoService.salvar(this.cadastroForm.value).subscribe((a) => {
        this.openCustomSnackBar("Produto cadastrado com sucesso!", "X");
      });
    } else {
      this.openCustomSnackBar("Preencha os dados obrigatórios", "X");
    }
  }

  limpar(): void {
    this.cadastroForm.reset();
  }

  openCustomSnackBar(message: string, action) {
    let snackBarRef = this.snackBar.open(message, action);
  }
}
