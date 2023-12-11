import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get<any[]>(this.url)
      .pipe(
        map((response:any) => {
          const characters = response.results;
          const charactersLength = characters.info.count;
          const randomIndices = this.getRandomIndices(charactersLength);
          const randomCharacters = randomIndices.map(index => characters[index]);
          response.results = randomCharacters;
          return response;
        })
      );
  }

  private getRandomIndices(length: number): number[] {
    const randomIndices:any[] = [];
    while (randomIndices.length < length) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices;
  }

  getCharactersByName(name: string) : Observable<any[]> {
    return this.http.get<any[]>(`${this.url}?name=${name}`);
  }

  getCharacterById(name: string) : Observable<any> {
    return this.http.get<any[]>(`${this.url}${name}`);
  }

  
}
