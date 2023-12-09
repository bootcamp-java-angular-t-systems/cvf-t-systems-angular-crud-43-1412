import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  @ViewChild('name') name!: ElementRef;
  
  constructor(private router: Router) {}

  search() {
      this.router.navigate(['/search/', this.name.nativeElement.value]);
  }
}
