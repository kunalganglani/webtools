import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageToBase64Component } from './image-to-base64/image-to-base64.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { Base64ToImageComponent } from './base64-to-image/base64-to-image.component';

const routes: Routes = [
  { path: '', component: ImageToBase64Component},
  { path: 'image-to-base64-encoding', component: ImageToBase64Component},
  { path: 'base64-to-image-decoding', component: Base64ToImageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImageToBase64Component, Base64ToImageComponent]
})
export class Base64WebToolModule { }
