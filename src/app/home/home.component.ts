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
      cardLabel: 'Image to Base64 Encoding',
      backgroundColor: 'green',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Base64 to Image Decoding',
      backgroundColor: 'lime',
      navigateTo: '/base64-encoding-decoding/base64-to-image-decoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'CSS Optimization/ Minify',
      backgroundColor: 'rgb(0,181,255)',
      navigateTo: '/css-web-tool/css-minify'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'JS Minify',
      backgroundColor: 'rgb(3,137,181)',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'if/else to Ternary',
      backgroundColor: 'blue',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Check my IP',
      backgroundColor: 'orange',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Password Generator',
      backgroundColor: 'tomato',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'URL Encoding',
      backgroundColor: 'rgb(169,125,133)',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'URL Decoding',
      backgroundColor: 'rgb(222,144,156)',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'String Reverse',
      backgroundColor: 'violet',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'String To Hex Convertor',
      backgroundColor: 'violet',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Hex to String Convertor',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'String To Binary',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Binary To String',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Case Convertor',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'Word Count',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'RGB to HEX',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'HEX to RGB',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'URL to QR Code',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    },
    {
      iconUrl: iconsArray.base64,
      cardLabel: 'QR Code TO URL',
      backgroundColor: 'lightgreen',
      navigateTo: '/base64-encoding-decoding/image-to-base64-encoding'
    }
  ];
  ngOnInit() {
  }

}
