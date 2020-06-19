import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

import { ProdutoService } from "./../produto.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Produto } from "./../model/produto";

@Component({
  selector: "app-cadastro-produto",
  templateUrl: "./cadastro-produto.component.html",
  styleUrls: ["./cadastro-produto.component.css"],
})
export class CadastroProdutoComponent implements OnInit {
  cadastroForm: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.inicializarFormulario();
    this.id = this.route.snapshot.params["id"];
    if (this.id) {
      await this.preencheDados();
    }
  }

  inicializarFormulario(): void {
    this.cadastroForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      qtde: [null],
      validade: [null, Validators.required],
      ativos: [true],
    });
  }

  async preencheDados() {
    this.produtoService.findById(this.id).subscribe((prod) => {
      let produto: Produto = prod;
      this.cadastroForm.setValue({
        id: produto.id,
        nome: produto.nome,
        qtde: produto.qtde,
        validade: produto.validade,
        ativos: produto.ativos,
      });
    });
  }

  salvarProduto(): void {
    if (this.cadastroForm.valid) {
      if (this.id) {
        this.produtoService.alterar(this.cadastroForm.value).subscribe((a) => {
          this.openCustomSnackBar("Produto alterado com sucesso!", "X");
          setTimeout(() => {
            this.router.navigate(["/produtos"]);
          }, 2000);
        });
      } else {
        this.produtoService.salvar(this.cadastroForm.value).subscribe((a) => {
          this.openCustomSnackBar("Produto cadastrado com sucesso!", "X");
          setTimeout(() => {
            this.router.navigate(["/produtos"]);
          }, 2000);
        });
      }
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
