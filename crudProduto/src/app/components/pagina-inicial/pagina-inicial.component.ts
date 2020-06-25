import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pagina-inicial",
  templateUrl: "./pagina-inicial.component.html",
  styleUrls: ["./pagina-inicial.component.css"],
})
export class PaginaInicialComponent implements OnInit {
  familia: Object[];
  constructor() {
    this.familia = [
      {
        nome: "Vitor",
        sobreNome: "Borges",
      },
      {
        nome: "Emerson",
        sobreNome: "Daniel",
      },
      {
        nome: "Thiago",
        sobreNome: "Contre!",
      },
    ];
  }

  ngOnInit() {
    console.log("Familia", this.familia);
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho) {
    console.log("Foi emitido o evento e chegou no pai >>>> ", respostaFilho);
  }
}
