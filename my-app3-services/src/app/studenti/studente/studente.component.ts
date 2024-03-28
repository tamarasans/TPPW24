import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Studente } from '../studente.model';
import { StudentiService } from '../studenti.service';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.css']
})
export class StudenteComponent implements OnInit {

  studente: Studente;

  constructor(private route: ActivatedRoute, private studentiService: StudentiService) { }

  ngOnInit(): void {

    //Questo fuori serve per chi apre direttamente il link alla pagina
    
    //utilizzo + per non utilizzare (number)
    //NOtazione parentesi quadre come nel forin o come negli oggetti
    // let persona = {
    //   nome: "Genny",
    //   cognome: "Bianchi"
    // }
    // console.log(persona.nome);
    // console.log(persona['nome']);
    
    let idStud= +this.route.snapshot.params['id'];
    this.studente = this.studentiService.getStudenteById(idStud);

    //questo con il subscribe serve per chi naviga cliccando sui rispettivi link
    this.route.params.subscribe(
      (params: Params)=>{
        console.log(params['id']);
          this.studente = this.studentiService.getStudenteById(+params['id']);
      }
    )

  }

  rimuoviStud(){
    console.log("Sto rimuovendo ", this.studente);
    this.studentiService.removeStudente(this.studente.id);
  }

}
