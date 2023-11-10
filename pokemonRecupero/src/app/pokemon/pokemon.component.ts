import { Component } from '@angular/core';
import { PokemonMain } from '../lista-tipi/pokemonList.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  PokemonList!: PokemonMain;
  obs!: Observable <PokemonMain>;

  constructor (private http: HttpClient, private route: ActivatedRoute)
  {
    this.route.paramMap.subscribe(p=>{
      this.obs = this.http.get<PokemonMain>("https://pokeapi.co/api/v2/type/"+p.get("path"));
      this.obs.subscribe(this.doSomething)
    })
    
  }

  doSomething = (data : PokemonMain) => {
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
