import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonTypeList, PokemonTypeDetail } from '../models/pokemon-type';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getTypes(): Observable<PokemonTypeList> {
    return this.http.get<PokemonTypeList>(`${this.baseUrl}/type`);
  }

  getTypeDetail(name: string): Observable<PokemonTypeDetail> {
    return this.http.get<PokemonTypeDetail>(`${this.baseUrl}/type/${name}`);
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`);
  }
}