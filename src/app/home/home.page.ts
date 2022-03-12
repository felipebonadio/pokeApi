import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  urlImg = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

  listaPokemon = [
    {
      numero: 1,
      nome: 'Bulbasaur',
      tipos: [
        'grass',
        'poison'
      ],
      foto: '001.png'
    },
    {
      numero: 4,
      nome: 'Charmander',
      tipos: [
        'fire'
      ],
      foto: '004.png'
    },
    {
      numero: 7,
      nome: 'Squirtle',
      tipos: [
        'water'
      ],
      foto: '007.png'
    },
    {
      numero: 25,
      nome: 'Pikachu',
      tipos: [
        'electric'
      ],
      foto: '025.png'
    },
    {
      numero: 149,
      nome: 'Dragonite',
      tipos: [
        'dragon',
        'flying'
      ],
      foto: '149.png'
    }
  ]

  constructor() {}



}
