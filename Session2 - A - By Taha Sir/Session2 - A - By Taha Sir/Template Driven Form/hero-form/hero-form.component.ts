import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent{

  hobbies = ['Singing', 'Dancing ',
            'Driving', 'Sleeping'];

  gender = ['male', 'female'];    

  model = new Hero(10, 'Faizan Ali', this.hobbies[0], this.gender[0], '2020bcs516@sggs.ac.in');

  submitted = false;

  onSubmit() { this.submitted = true; }


  newHero() {
    this.model = new Hero(42, '', '', '');
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }

}