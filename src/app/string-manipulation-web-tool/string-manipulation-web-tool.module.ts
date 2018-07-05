import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringReverveComponent } from './string-reverve/string-reverve.component';
import { StringToHexComponent } from './string-to-hex/string-to-hex.component';
import { HexToStringComponent } from './hex-to-string/hex-to-string.component';
import { StringToBinaryComponent } from './string-to-binary/string-to-binary.component';
import { BinaryToStringComponent } from './binary-to-string/binary-to-string.component';
import { StringCaseConvertorComponent } from './string-case-convertor/string-case-convertor.component';
import { WordCountComponent } from './word-count/word-count.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StringReverveComponent, StringToHexComponent, HexToStringComponent, StringToBinaryComponent, BinaryToStringComponent, StringCaseConvertorComponent, WordCountComponent]
})
export class StringManipulationWebToolModule { }
