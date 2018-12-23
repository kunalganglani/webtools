import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-to-hex',
  templateUrl: './string-to-hex.component.html',
  styleUrls: ['./string-to-hex.component.css']
})
export class StringToHexComponent implements OnInit {

  outputStr = '';
  constructor() { }

  ngOnInit() {
  }
  stringToHex(strInput) {
    this.outputStr = this.hexEncode(strInput);
  }

  hexEncode(strInput) {
    let hex, i;
    let result = '';
    for (i = 0; i < strInput.length; i++) {
        hex = strInput.charCodeAt(i).toString(16);
        result += ('000' + hex).slice(-4);
    }
    return result;
  }

}
