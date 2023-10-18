import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Typelist } from './TypeList.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemonRecupero';
  pokemonlist!: Typelist;
  obs! :Observable <Typelist>;
  constructor(private http : HttpClient)
  {
    this.obs = this.http.get<Typelist>("https://pokeapi.co/api/v2/type");
    this.obs.subscribe(this.doSomething)
    
  }
doSomething = (data : Typelist) => (
  this.pokemonlist = data
)
  }



