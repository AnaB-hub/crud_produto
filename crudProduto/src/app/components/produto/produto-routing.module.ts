import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";
import { ProdutosComponent } from "./produtos/produtos.component";

const routes: Routes = [
  {
    path: "cadastro-produto",
    component: CadastroProdutoComponent,
  },
  {
    path: "produtos",
    component: ProdutosComponent,
  },
  {
    path: "produto/edit/:id",
    component: CadastroProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
