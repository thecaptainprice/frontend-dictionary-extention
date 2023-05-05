import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  constructor(public authService: AuthService) {}

  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
}
