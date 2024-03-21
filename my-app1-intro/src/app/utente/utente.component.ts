import { Component, OnInit } from '@angular/core';
import { Utente } from './Utente.model';


@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent implements OnInit {
  
  utente: Utente = {
    nome: "Dario",
    cognome: "Mennillo",
    email: "dario.mennillo@mail.com",
    status: "online"
  };


  cambiaStatus(){
    if(this.utente.status == "online"){
      this.utente.status = "offline";
    }else{
      this.utente.status = "online";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
