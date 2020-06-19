import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";

const routes: Routes = [
  {
    path: "cadastro-produto",
    component: CadastroProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
