import { name } from './../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData
  constructor(
    private service: PokemonService
  ) {
    this.pokemon = {
      id: 0,
      name: "",
      sprites: {
        front_default: ""
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(pokemonName: string) {
    this.service.getPokemon(pokemonName.toLowerCase()).subscribe(
      {
        next: (res: any) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types:res.types
          }
          console.log(this.pokemon)
        },
        error: (err: any) => console.log('not found')
      }
    )
  }

}
