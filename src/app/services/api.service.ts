import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public buscarListaPokemon(url: string){
    const listaPokemon =[];
    this.http.get(url).subscribe(dadosRetorno => {
      dadosRetorno['results'].forEach(cadaPokemon =>{
        const dadosPokemon = this.buscarDadosPokemon(cadaPokemon['url']);
        listaPokemon.push(dadosPokemon);        
      })
    });
    console.warn(listaPokemon);
  }

  buscarDadosPokemon(url: string){
    let pokemon = {};
    return this.http.get(url).subscribe(dadosPokemon =>{
      return dadosPokemon;
    });
  }
}
