import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CharactersService } from '../../services/characters.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-character',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private charactersService: CharactersService, private router: Router ) {
    this.myForm = this.formBuilder.group({
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      location: '',
      image: '',
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.charactersService.addCharacter(formData).subscribe(response => {
        console.log('Result:', response);
        this.router.navigate(['/characters']);
      });
    }
  }

}
