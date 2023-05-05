import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.sass'],
})
export class AddWordComponent {
  form = new FormGroup({
    email: new FormControl('ali@gmail.com', [
      Validators.required,
      Validators.minLength(20),
    ]),
  });

  get email() {
    return this.form.controls.email;
  }
}
