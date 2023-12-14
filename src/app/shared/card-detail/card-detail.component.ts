import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CapitalizeFirstLetterPipe } from '../../pipes/capitalize-first-letter.pipe';
import { CharactersService } from '../../services/characters.service';
import { response } from 'express';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CapitalizeFirstLetterPipe, FormsModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent {
  @Input() character: any;

  constructor(private router: Router, private charactersService: CharactersService) { }

  returnToList() {
    this.router.navigate(['/characters']);
  }

  updateCharacter() {
    this.router.navigate([`/update-character/${this.character.id}`]);
  }

  deleteCharacter() {
    this.charactersService.deleteCharacter(this.character.id).subscribe(
      (response) => {
        console.log('Deletcion successfull: ', response);
      },
      (error) => {
        console.log('Error deleting character: ', error);
      }
    );
    this.router.navigate(['/characters']);
  }
}
