import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TLSSocket } from 'tls';


@Component({
  selector: 'app-update-character',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-character.component.html',
  styleUrl: './update-character.component.css'
})

export class UpdateCharacterComponent implements OnInit{
  character: any;
  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.myForm = this.formBuilder.group({
      name: [''], 
      status: [''],
      species: [''],
      gender: [''],
      origin: [''],
      location: [''],
      image: [''],
    });
    this.route.params.subscribe(params => {
      const characterId = params['id'];
      this.getCharacterDetails(characterId);
    });
  }

  private initializeForm() {
    this.myForm.patchValue({
      name: this.character.name || '', 
      status: this.character.status || '',
      species: this.character.species || '',
      gender: this.character.gender || '',
      origin: this.character.origin || '',
      location: this.character.location || '',
      image: this.character.image || '',
    });
  }

  getCharacterDetails(characterId: number) {
    this.charactersService.getCharacterById(characterId).subscribe((data: any) => {
      this.character = data;
      this.initializeForm();
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.charactersService.updateCharacter(this.character.id, formData).subscribe(response => {
        this.router.navigate(['/characters']);
      });
    }
  }
}

