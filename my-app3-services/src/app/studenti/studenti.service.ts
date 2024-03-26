import { Injectable } from '@angular/core';
import { Studente } from './studente.model';

// ng g service nomeService

@Injectable({
  providedIn: 'root'
})
export class StudentiService {

  //da oggi in poi il dato lo creo nel service
  listaStudenti: Studente[] = [
    {
      id: 1,
      nome: "Laura Bianchi",
      corso: "TPPW"
    },
    {
      id: 2,
      nome: "Mario Verdi",
      corso: "TSS"
    },
    {
      id: 3,
      nome: "Anna Gialli",
      corso: "Web Marketing"
    }
  ];


  constructor() { }

  //Questo metodo mi restituisce tutti gli studenti
  getAllStudenti(){
    return this.listaStudenti;
  }


  getStudenteById(id: number){
    let studente = this.listaStudenti.find(
      (studente) =>{
        return studente.id === id
      }
    )
    return studente;
  }

  addStudente(studente: Studente){
    this.listaStudenti.push(studente);
  }

}
