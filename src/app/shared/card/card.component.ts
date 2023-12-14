import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character: any;

  constructor(private router: Router, private charactersService: CharactersService) { }

  returnToList() {
    this.router.navigate(['/characters']);
  }

  seeMore() {
    const characterId = this.character.id;
    this.router.navigate(['/character/', characterId]);
  }

  deleteCharacter() {
    console.log("Delete request");
    this.charactersService.deleteCharacter(this.character.id).subscribe(
      (response) => {
        console.log('Deletcion successfull: ', response);
        window.location.reload()
      },
      (error) => {
        console.log('Error deleting character: ', error);
      }
    );
    this.router.navigate(['/characters']);
  }

  updateCharacter() {
    this.router.navigate([`/update-character/${this.character.id}`]);
  }

}
