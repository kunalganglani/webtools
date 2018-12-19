import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptMinifyComponent } from './javascript-minify/javascript-minify.component';
import { IfElseTernaryComponent } from './if-else-ternary/if-else-ternary.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CoreModule } from '../shared/core/core.module';

const routes: Routes = [
  { path: '', component: JavascriptMinifyComponent},
  { path: 'js-minify', component: JavascriptMinifyComponent},
  { path: 'if-else-to-ternary', component: IfElseTernaryComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JavascriptMinifyComponent, IfElseTernaryComponent]
})
export class JavascriptWebToolModule { }
