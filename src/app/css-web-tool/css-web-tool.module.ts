import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssMinifyComponent } from './css-minify/css-minify.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CoreModule } from '../shared/core/core.module';

const routes: Routes = [
  { path: '', component: CssMinifyComponent},
  { path: 'css-minify', component: CssMinifyComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CssMinifyComponent]
})
export class CssWebToolModule { }
