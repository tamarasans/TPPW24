import { Component, OnInit } from '@angular/core';
import { Docente } from './docente.model';

@Component({
  selector: 'app-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.css']
})
export class DocentiComponent implements OnInit {

  listaDocenti: Docente[] = [
    {
      id: 1,
      nome: "Dario",
      corso: "TPPW",
      materia: "Javascript"
    },
    {
      id: 2,
      nome: "Davide",
      corso: "TPPW",
      materia: "HTML"
    },
    {
      id: 3,
      nome: "Luca",
      corso: "TTPW",
      materia: "Sicurezza"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
