import { Component } from '@angular/core';
import { Pizza } from './pizza/pizza.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2-binding';

  listaPizze: Pizza[] = [];

}
