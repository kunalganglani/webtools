import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-reverve',
  templateUrl: './string-reverve.component.html',
  styleUrls: ['./string-reverve.component.css']
})
export class StringReverveComponent implements OnInit {

  outputStr = '';
  constructor() { }

  ngOnInit() {
  }
  reverseString(strInput) {
    this.outputStr = strInput.split('').reverse().join('');
  }

}
