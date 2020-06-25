import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "./../../material/material.module";
import { RouterModule } from "@angular/router";
import { PaginaInicialComponent } from "./pagina-inicial.component";
import { FilhoComponent } from "./../filho/filho.component";

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [PaginaInicialComponent, FilhoComponent],
})
export class PaginaInicialModule {}
