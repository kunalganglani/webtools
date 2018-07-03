import { Component, OnInit } from '@angular/core';
import { CardInfo } from './home-nav-card/CardInfo';
import {iconsArray} from './icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  cards: CardInfo[] = [
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Image > Base64',
      backgroundColor: 'lightgreen',
      navigateTo: '/events'
    }
  ];
  ngOnInit() {
  }

}
