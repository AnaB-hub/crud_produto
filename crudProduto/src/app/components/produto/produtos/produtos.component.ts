import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { ProdutoService } from "./../produto.service";
import { MatSort, MatSnackBar, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-produtos",
  templateUrl: "./produtos.component.html",
  styleUrls: ["./produtos.component.css"],
})
export class ProdutosComponent implements OnInit {
  dados: any;
  displayedColumns: string[] = ["nome", "qtde", "validade", "acoes"];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Input() recebeFamilia;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    await this.carregarDados();
    this.dados.sort = this.sort;
    console.log(this.recebeFamilia);
  }

  async carregarDados() {
    let lista: any = await this.produtoService.consultar().toPromise();
    this.dados = new MatTableDataSource(lista);
  }

  alterar(selecionado): void {
    console.log(selecionado);
    this.router.navigate([`/produto/edit/${selecionado}`]);
  }

  excluir(selecionado): void {
    this.produtoService.excluir(selecionado).subscribe((_) => {
      this.openCustomSnackBar("Produto excluído com sucesso!", "X");
      this.carregarDados();
    });
  }

  openCustomSnackBar(message: string, action) {
    let snackBarRef = this.snackBar.open(message, action);
  }
}
