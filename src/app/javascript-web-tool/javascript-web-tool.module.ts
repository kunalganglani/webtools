import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptMinifyComponent } from './javascript-minify/javascript-minify.component';
import { IfElseTernaryComponent } from './if-else-ternary/if-else-ternary.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
  { path: '', component: JavascriptMinifyComponent},
  { path: 'js-minify', component: JavascriptMinifyComponent},
  { path: 'if-else-to-ternary', component: IfElseTernaryComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JavascriptMinifyComponent, IfElseTernaryComponent]
})
export class JavascriptWebToolModule { }
