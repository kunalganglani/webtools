import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  @ViewChild('myTopnav') myTopnav: ElementRef;

  constructor(public _authService: AuthService) { }
  ngOnInit() {
  }

  myFunction() {
    const x = this.myTopnav.nativeElement;
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

}
