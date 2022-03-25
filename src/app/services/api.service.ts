import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  buscarListaPokemon(url: string) {
    return this.http.get(url);
  }

  buscarDadosPokemon(url: string) {
    return this.http.get(url)
  }
}
