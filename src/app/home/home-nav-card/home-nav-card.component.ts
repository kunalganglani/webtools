import { Component, OnInit, Input } from '@angular/core';

import {CardInfo} from './CardInfo';

@Component({
  selector: 'app-home-nav-card',
  templateUrl: './home-nav-card.component.html',
  styleUrls: ['./home-nav-card.component.css']
})
export class HomeNavCardComponent implements OnInit {
  @Input() cardInfo: CardInfo;
  constructor() { }

  ngOnInit() {
  }

}
