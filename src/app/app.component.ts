import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.subscribe(event => {
     if (event instanceof NavigationEnd) {
      if (isPlatformBrowser(this.platformId)) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
     }
   });
 }
}
