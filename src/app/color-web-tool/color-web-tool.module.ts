import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RgbHexConvertorComponent } from './rgb-hex-convertor/rgb-hex-convertor.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CoreModule } from '../shared/core/core.module';

const routes: Routes = [
  { path: '', component: RgbHexConvertorComponent},
  { path: 'rgb-hex-convertor', component: RgbHexConvertorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RgbHexConvertorComponent]
})
export class ColorWebToolModule { }
