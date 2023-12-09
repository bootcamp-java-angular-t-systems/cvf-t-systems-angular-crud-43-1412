import { Component, Input, OnInit } from '@angular/core';
import { CardDetailComponent } from '../shared/card-detail/card-detail.component';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CardDetailComponent],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: any;

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      this.getCharacterDetails(characterId);
    });
  }

  getCharacterDetails(characterId: string) {
    this.charactersService.getCharacterById(characterId).subscribe((data: any) => {
      console.log(data)
      this.character = data;
      console.log(this.character)
  });
  }
}
