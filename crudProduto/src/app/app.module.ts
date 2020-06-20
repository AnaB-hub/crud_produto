import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MAT_DATE_LOCALE } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material/material.module";
import { NavComponent } from "./components/nav/nav.component";
import { ProdutoRoutingModule } from "./components/produto/produto-routing.module";
import { ProdutoModule } from "./components/produto/produto.module";
import { PaginaInicialModule } from "./components/pagina-inicial/pagina-inicial.module";
import { PaginaInicialRoutingModule } from "./components/pagina-inicial/pagina-inicial-routing.module";

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    ProdutoRoutingModule,
    ProdutoModule,
    HttpClientModule,
    PaginaInicialModule,
    PaginaInicialRoutingModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
