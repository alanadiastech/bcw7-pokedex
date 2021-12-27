import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../servicos/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

  pokemons:any

  constructor(public pokemonService: PokemonService) {
    this.pokemons = []
  }

  ngOnInit(): void {
    this.busca()
  }

  busca(){
    this.pokemonService.pegarPok().subscribe({
      next:(resultado)=>{this.pokemons = resultado
              console.log(this.pokemons)},
      error: (erro) => console.error(erro),
      complete: () => console.log ('Fim!')
    })
  }
}
