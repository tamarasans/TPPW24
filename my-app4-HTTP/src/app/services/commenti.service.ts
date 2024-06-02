import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentiService {

  URL: string = "http://localhost:3000/commenti"; //ENDPOINT

  commenti: {
    id: string,
    bodyTxt: string
  }[];

  //Mi servono i metodi di un oggetto chiamato HttpClient
  constructor(private http: HttpClient) {}

  getCommenti(){
    //In questo caso il subscribe lo faccio qui all'interno del service
    // return this.http.get(this.URL).subscribe(commenti =>{
    //   console.log(commenti);      
    // });

    //In questo caso faccio il subscribe nel component che richiede il metodo
    return this.http.get<{id: string, bodyTxt: string}[]>(this.URL);
  }

  postCommenti(id: string, bodyTxt: string){
    const commento: {
      id: string,
      bodyTxt: string
    } = {
      id : id,
      bodyTxt: bodyTxt
    }

    this.http.post(
      this.URL,
      commento
    ).subscribe(
      responseData =>{
        console.log(responseData);      
      }
    )
  }

  deletePost(id:string){
    return this.http.delete(this.URL+"/"+id).subscribe()
  }
}
