import { Component, OnInit } from '@angular/core';
import { Docente } from '../docente.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  // 1. per prendere un parametro dinamico conviene utilizzare il metodo ngOnInit()
  // 2. per poter guardare i parametri devo iniettare la rotta nel mio component ovvero nel costruttore

  docente: Docente;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.docente = {
      id: this.route.snapshot.params['id'],
      nome: this.route.snapshot.params['nome'],
      corso: this.route.snapshot.params['corso'],
      materia: this.route.snapshot.params['materia']
    }

    
    this.route.params.subscribe(((params: Params) =>{
      this.docente.id = params['id'];
      this.docente.nome = params['nome'];
      this.docente.corso = params['corso'];
      this.docente.materia = params['materia'];
    }))
      
    console.log(this.docente);
  }


}
