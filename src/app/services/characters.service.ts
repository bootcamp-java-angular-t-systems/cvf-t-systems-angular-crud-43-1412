import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { map, toArray   } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    const randomIndices = this.getRandomIndices();
    const newUrl = `https://rickandmortyapi.com/api/character/${randomIndices.join(',')}`;
    return this.http.get<any[]>(newUrl);
  }
  
  private getRandomIndices(): number[] {
    const listLength = 20;
    const totalCharacters = 826;
    const randomIndices: number[] = [];

    while (randomIndices.length < listLength) {
      const randomIndex = Math.floor(Math.random() * totalCharacters);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    } 
    return randomIndices;
  }

  getCharactersByName(name: string) : Observable<any[]> {
    return this.http.get<any[]>(`${this.url}?name=${name}`);
  }

  getCharacterById(name: number) : Observable<any> {
    return this.http.get<any[]>(`${this.url}${name}`);
  }

}
