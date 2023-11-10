import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Typelist } from '../TypeList.model';

@Component({
  selector: 'app-lista-tipi',
  templateUrl: './lista-tipi.component.html',
  styleUrls: ['./lista-tipi.component.css']
})
export class ListaTipiComponent {
  title = 'esercitazione';

  PokemonList!: Typelist;
  obs!: Observable <Typelist>;

  constructor (private http: HttpClient)
  {
    this.obs = this.http.get<Typelist>("https://pokeapi.co/api/v2/type");
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Typelist) => {
    this.PokemonList = data
  }

  getLastPart (url : string ) {
    var parts = url.split("/");
    console.log(parts)
    parts.pop()
    var lastSegment = parts.pop();
    return lastSegment
    
  }
}
