import { Component, OnInit, ViewChild } from '@angular/core';
import {ElementRef} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-base64-to-image',
  templateUrl: './base64-to-image.component.html',
  styleUrls: ['./base64-to-image.component.css']
})
export class Base64ToImageComponent implements OnInit {
  @ViewChild('downloadLink') downloadLink: ElementRef;
  @ViewChild('previewImage') previewImage: ElementRef;

  constructor( title: Title, meta: Meta) {
    title.setTitle('Base 64 to Image Decoding');

    meta.addTags([
      { name: 'author',   content: 'Smallwebtools.com'},
      // tslint:disable-next-line:max-line-length
      { name: 'keywords', content: 'base64, decoding base64 encoding, Image to base64, Comporess Images with base64, base 64, webapp optimization'},
      { name: 'description', content: 'Convert Base64 String to Image and Pictures. Download Images from Base64 Strings' }
    ]);
  }

  ngOnInit() {
  }
  decodeString(base64Input) {
    let src = 'data:image/jpeg;base64,';
    const item_image = base64Input;
    src += item_image;
    this.previewImage.nativeElement.src = src;
    this.downloadLink.nativeElement.href = src;
    this.previewImage.nativeElement.style.width = '100%';
  }
}
