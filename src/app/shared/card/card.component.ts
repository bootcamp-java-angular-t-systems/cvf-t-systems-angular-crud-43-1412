import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() character: any;

  constructor(private router: Router) { }

  seeMore() {
    const characterId = this.character.id;
    this.router.navigate(['/character/', characterId]);
  }

}
