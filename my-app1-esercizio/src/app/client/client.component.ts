import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client.model';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  listaClient: Client[] = [
    {
      nome: "web",
      tipo: "Browser",
      server: {
        nome: "Aruba",
        tipo: "WebServer",
        status: true
      }
    },
    {
      nome: "Mail",
      tipo: "ClientMail",
      server: {
        nome: "ISP",
        tipo: "IMAP Server",
        status: false
      }
    },
  ]

  @Input() admin: {
    nome: string,
    cognome: string
  };


  constructor() { }

  ngOnInit(): void {
  }

}
