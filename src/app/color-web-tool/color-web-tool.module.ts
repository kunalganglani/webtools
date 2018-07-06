import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RgbHexConvertorComponent } from './rgb-hex-convertor/rgb-hex-convertor.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: RgbHexConvertorComponent},
  { path: 'rgb-hex-convertor', component: RgbHexConvertorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RgbHexConvertorComponent]
})
export class ColorWebToolModule { }
