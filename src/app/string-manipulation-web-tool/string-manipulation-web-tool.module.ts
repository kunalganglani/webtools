import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringReverveComponent } from './string-reverve/string-reverve.component';
import { StringToHexComponent } from './string-to-hex/string-to-hex.component';
import { HexToStringComponent } from './hex-to-string/hex-to-string.component';
import { StringToBinaryComponent } from './string-to-binary/string-to-binary.component';
import { BinaryToStringComponent } from './binary-to-string/binary-to-string.component';
import { StringCaseConvertorComponent } from './string-case-convertor/string-case-convertor.component';
import { WordCountComponent } from './word-count/word-count.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CoreModule } from '../shared/core/core.module';

const routes: Routes = [
  { path: '', component: StringReverveComponent},
  { path: 'string-reverse', component: StringReverveComponent},
  { path: 'string-to-hex', component: StringToHexComponent},
  { path: 'hex-to-string', component: HexToStringComponent},
  { path: 'string-to-binary', component: StringToBinaryComponent},
  { path: 'binary-to-string', component: BinaryToStringComponent},
  { path: 'case-convertor', component: StringCaseConvertorComponent},
  { path: 'word-count', component: WordCountComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StringReverveComponent,
    StringToHexComponent,
    HexToStringComponent,
    StringToBinaryComponent,
    BinaryToStringComponent,
    StringCaseConvertorComponent,
    WordCountComponent]
})
export class StringManipulationWebToolModule { }
