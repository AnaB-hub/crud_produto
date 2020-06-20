import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "./../../material/material.module";
import { RouterModule } from "@angular/router";
import { PaginaInicialComponent } from "./pagina-inicial.component";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [PaginaInicialComponent],
})
export class PaginaInicialModule {}
