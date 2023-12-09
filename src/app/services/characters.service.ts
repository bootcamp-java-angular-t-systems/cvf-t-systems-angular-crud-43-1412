import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get(this.url);
  }

  
}
