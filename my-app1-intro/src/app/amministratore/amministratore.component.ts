import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amministratore',
  templateUrl: './amministratore.component.html',
  styleUrls: ['./amministratore.component.css']
})
export class AmministratoreComponent implements OnInit {

  //dichiaro il Tipo "al volo"
  amministratore: {
    nome: string,
    ruolo: string,
    classi: number
  } = {
    nome: "Jacopo",
    ruolo: "Admin Sistema",
    classi: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

}
