import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonInfo } from './pokemonInfo.model';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent {
  PokemonInfo!: PokemonInfo;
  obs!: Observable <PokemonInfo>;

  constructor (private http: HttpClient, private route: ActivatedRoute)
  {
    this.route.paramMap.subscribe(p=>{
      this.obs = this.http.get<PokemonInfo>("https://pokeapi.co/api/v2/pokemon/"+p.get("id"));
      this.obs.subscribe(this.doSomething)
    })
    
  }

  doSomething = (data : PokemonInfo) => {
    this.PokemonInfo = data
    
  }
}
