import { Component, OnInit } from '@angular/core';
import { Studente } from './Studente';

@Component({
  selector: 'app-lista-studenti',
  templateUrl: './lista-studenti.component.html',
  styleUrls: ['./lista-studenti.component.css']
})
export class ListaStudentiComponent implements OnInit {

  // listaStudenti: string[] = [
  //   "Paolo",
  //   "Sofia",
  //   "Tamara",
  //   "Simone",
  //   "Elena"
  // ]

  listaStudenti: Studente[] = [
    {
      nome: "Paolo",
      cognome: "Carlini"
    },
    {
      nome: "Sofia",
      cognome: "Signa"
    },
    {
      nome: "Tamara",
      cognome: "Luna"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
