import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssMinifyComponent } from './css-minify/css-minify.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: CssMinifyComponent},
  { path: 'css-minify', component: CssMinifyComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CssMinifyComponent]
})
export class CssWebToolModule { }
