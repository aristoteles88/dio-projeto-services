import { name } from './../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
export type PokemonData = {
  name: string
  id: number
  sprites: {
    front_default: string
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
}
