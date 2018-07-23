import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  _router: Router;
  @ViewChild('myTopnav') myTopnav: ElementRef;

  constructor(public _authService: AuthService) { }
  ngOnInit() {
  }

  navigateTo(path) {
    this._router.navigate([`/${path}`]);
    this.toggleMenu();
  }

  toggleMenu() {
    const x = this.myTopnav.nativeElement;
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

}
