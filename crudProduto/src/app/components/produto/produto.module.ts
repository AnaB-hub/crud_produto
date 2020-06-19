import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CadastroProdutoComponent } from "./cadastro-produto/cadastro-produto.component";
import { MaterialModule } from "./../../material/material.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CadastroProdutoComponent],
})
export class ProdutoModule {}
