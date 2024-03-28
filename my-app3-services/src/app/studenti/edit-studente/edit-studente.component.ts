import { Component, OnChanges, OnInit } from '@angular/core';
import { StudentiService } from '../studenti.service';
import { Studente } from '../studente.model';

@Component({
  selector: 'app-edit-studente',
  templateUrl: './edit-studente.component.html',
  styleUrls: ['./edit-studente.component.css']
})
export class EditStudenteComponent implements OnInit{

  idNuovoStud: number;
  nomeNuovoStud: string;
  corsoNuovoStud: string;


  constructor(private studServ: StudentiService) { }

  ngOnInit(): void {
    this.idNuovoStud = this.studServ.listaStudenti.length + 1;
  }


  onAddStudente(){
    let studente: Studente = new Studente(this.idNuovoStud, this.nomeNuovoStud, this.corsoNuovoStud);
    this.studServ.addStudente(studente);
    this.idNuovoStud++;
    this.nomeNuovoStud = "";
    this.corsoNuovoStud = ""
   }

}
