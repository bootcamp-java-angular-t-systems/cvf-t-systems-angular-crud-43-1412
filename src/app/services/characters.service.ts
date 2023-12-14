import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private url = "http://localhost:3000/characters/";

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get<any[]>(this.url);
  }

  getCharacterById(name: number) : Observable<any> {
    return this.http.get<any[]>(`${this.url}${name}`);
  }

  deleteCharacter(id: number): Observable<any> {
    console.log(`${this.url}${id}`);
    return this.http.delete<any>(`${this.url}${id}`);
  }

  updateCharacter(id: number, updatedData: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put<any>(url, updatedData);
  }

  getCharactersByName(newData: any) {
    return this.http.get<any[]>(this.url);
  }

  addCharacter(newData: any): Observable<any> {
    return this.http.post<any>(this.url, newData);
  }

}
