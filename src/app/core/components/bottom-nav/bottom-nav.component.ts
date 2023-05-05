import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.sass'],
})
export class BottomNavComponent {
  constructor(private router: Router) {}

  switchAddWord() {
    this.router.navigate(['/']);
  }
  switchLeitner() {
    this.router.navigate(['/', 'login']);
  }
  switchDictionary() {
    this.router.navigate(['/', 'login']);
  }
  switchAccount() {
    this.router.navigate(['/', 'login']);
  }
}
