import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListaTipiComponent } from './lista-tipi/lista-tipi.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';

const routes: Routes = [
  {path: "pokemon/:id", component: PokemonInfoComponent},
  {path: "tipi", component: ListaTipiComponent},
  {path: "tipi/:path", component: PokemonComponent},
  {path: "**", redirectTo: "tipi", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }