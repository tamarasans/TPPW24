import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Tecnico Prod Pag WEB';

  numStudenti:number = 14;

  durataCorso: number = 600;

  docenti: string[] = ["Dario Mennillo", "Davide Ghione", "Luca Ceroni", "Elena Giardina"];
  
  nomeClasse: string = "";

  scegliColore(){
    let numCas = Math.random();

    if(numCas <= 0.5){
     return this.nomeClasse = "txtRed";
    }else{
     return this.nomeClasse = "txtBlue";
    }

  }

  constructor(){
    this.scegliColore();
  }
  
}
