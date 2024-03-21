import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../models/server.model';

@Component({
  selector: 'app-nuovo-server',
  templateUrl: './nuovo-server.component.html',
  styleUrls: ['./nuovo-server.component.css']
})
export class NuovoServerComponent implements OnInit {

  @Output() onInviaServer = new EventEmitter<Server>;

  mioNuovoServer: Server = {
    nome: "Tiscali",
    tipo: "ISP",
    status: false
  }
  

  onCreaServer(){
    this.onInviaServer.emit(this.mioNuovoServer);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
