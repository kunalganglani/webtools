import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

const routes: Routes = [
  { path: '', component: PasswordGeneratorComponent},
  { path: 'password-generator', component: PasswordGeneratorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PasswordGeneratorComponent]
})
export class PasswordWebToolModule { }
