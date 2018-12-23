import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hex-to-string',
  templateUrl: './hex-to-string.component.html',
  styleUrls: ['./hex-to-string.component.css']
})
export class HexToStringComponent implements OnInit {

  outputStr = '';
  constructor() { }

  ngOnInit() {
  }
  hexToString(strInput) {
    this.outputStr = this.hexDecode(strInput);
  }

  hexDecode(strInput) {
    let j;
    const hexes = strInput.match(/.{1,4}/g) || [];
    let back = '';
    for (j = 0; j < hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
  }

}
