import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get(this.url);
  }

  getCharactersByName(name: string) : Observable<any[]> {
    return this.http.get<any[]>(`${this.url}?name=${name}`);
  }

  getCharacterById(name: string) : Observable<any> {
    return this.http.get<any[]>(`${this.url}${name}`);
  }

  
}
