import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CapitalizeFirstLetterPipe } from '../../pipes/capitalize-first-letter.pipe';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CapitalizeFirstLetterPipe],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent {
  @Input() character: any;

  constructor(private router: Router) { }

  returnToList() {
    this.router.navigate(['/characters']);
  }
}
