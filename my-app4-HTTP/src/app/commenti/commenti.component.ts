import { Component, OnInit } from '@angular/core';
import { CommentiService } from '../services/commenti.service';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent implements OnInit {

  listaCommenti: {
    id: string,
    bodyTxt: string
  }[];

  constructor(private commServ: CommentiService) { }



  ngOnInit(): void {
    //primo caso
    // this.commServ.getCommenti();

    //secondo caso
    this.commServ.getCommenti().subscribe(commenti =>{
      this.listaCommenti = commenti;
      console.log(this.listaCommenti);
    });
  }

  onAddCommento(){
    this.commServ.postCommenti("4", "In bocca al lupo per lo stage");
    this.ngOnInit();
  }

  onDeletePost(){
    let idDelete = "2";
    this.commServ.deletePost(idDelete)
  }

  
}
