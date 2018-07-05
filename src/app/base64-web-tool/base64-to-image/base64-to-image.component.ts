import { Component, OnInit, ViewChild } from '@angular/core';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-base64-to-image',
  templateUrl: './base64-to-image.component.html',
  styleUrls: ['./base64-to-image.component.css']
})
export class Base64ToImageComponent implements OnInit {
  @ViewChild('downloadLink') downloadLink: ElementRef;
  @ViewChild('previewImage') previewImage: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  decodeString(base64Input) {
    let src = 'data:image/jpeg;base64,';
    const item_image = base64Input;
    src += item_image;
    // const newImage = document.querySelector('img');
    // newImage.src = src;
    this.previewImage.nativeElement.src = src;
    this.downloadLink.nativeElement.href = src;
    // newImage.width = newImage.height = 800;
    document.querySelector('#imageContainer').innerHTML = newImage.outerHTML;
    document.querySelector('#imageContainer').innerHTML = newImage.outerHTML;

  }


}
