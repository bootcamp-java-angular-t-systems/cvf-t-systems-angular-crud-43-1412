import { Component, Input } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { CardComponent } from '../shared/card/card.component';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})

export class CharacterListComponent {

  @Input() characters: any[]  = [];
  searchTerm: string = '';

  constructor(private charactersService: CharactersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchTerm = params['name'];
      this.handleRouteParams();
    });
  }
  
  handleRouteParams() {
    if (this.searchTerm) {
      this.search();
    } else {
      this.charactersService.getAllCharacters().subscribe((data: any) => {
          this.characters = data.results;
      });
    }
  }

  search() {
    this.charactersService.getCharactersByName(this.searchTerm).subscribe((data: any) => {
      this.characters = data.results;
    });
    this.searchTerm = '';
  }

}
