import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  // pizza: Pizza;
  @Output('sparaPizza') onPizza = new EventEmitter<Pizza>();

  nomePizza: string;
  prezzoPizza: number;

  constructor() { }

  ngOnInit(): void {
  }

  onAddPizza(){
    //creando una nuova istanza di tipo Pizza facente riferimento all'import in alto
    let nuovaPizza = new Pizza(this.nomePizza, this.prezzoPizza);
    console.log(nuovaPizza);

    this.onPizza.emit(nuovaPizza);
  }

}
