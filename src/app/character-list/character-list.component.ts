import { Component, Input } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { CardComponent } from '../shared/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})

export class CharacterListComponent {

  @Input() characters: any[]  = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.charactersService.getAllCharacters().subscribe((data: any) => {
      console.log(data)
      this.characters = data.results;
    });
  }

}
