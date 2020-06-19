import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material/material.module";
import { NavComponent } from "./components/nav/nav.component";
import { ProdutoRoutingModule } from "./components/produto/produto-routing.module";
import { ProdutoModule } from "./components/produto/produto.module";
import { MAT_DATE_LOCALE } from "@angular/material";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

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
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
