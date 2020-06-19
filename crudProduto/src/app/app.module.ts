import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material/material.module";
import { NavComponent } from "./components/nav/nav.component";
import { ProdutoRoutingModule } from "./components/produto/produto-routing.module";
import { CadastroProdutoComponent } from "./components/produto/cadastro-produto/cadastro-produto.component";

@NgModule({
  declarations: [AppComponent, NavComponent, CadastroProdutoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ProdutoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
