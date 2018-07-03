import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64WebToolComponent } from './base64-web-tool.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: Base64WebToolComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Base64WebToolComponent]
})
export class Base64WebToolModule { }
