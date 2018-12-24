import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent implements OnInit {

  constructor() { }
  defaultCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  defaultLength = 8;
  outputStr = '';
  ngOnInit() {
  }

  generatePassword(charset, length) {
    let retVal = '';
    if (length === '') {
      length = this.defaultLength;
    }
    if (charset === '') {
      charset = this.defaultCharset;
    }
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    this.outputStr = retVal;
  }

}
