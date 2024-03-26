import { Component, OnInit } from '@angular/core';
import { StudentiService } from './studenti.service';
import { Studente } from './studente.model';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {

  listaStudenti: Studente[];

  //1. per poter utilizzare il service devo iniettarlo nel component (DEPENDENCY INJECTION)
  constructor(private studentiService: StudentiService) { }

  ngOnInit(): void {
    console.log(this.studentiService.listaStudenti);
    // this.listaStudenti = this.studentiService.listaStudenti;
    this.listaStudenti = this.studentiService.getAllStudenti();
  }

}
