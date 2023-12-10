import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles:['input {width:70%;}'],


})
export class NavbarComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onSearch(value: string) {
    console.log('Buscar-->', value);
    if (value && value.length > 3) {
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}


