import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CheckMyIpComponent } from './check-my-ip/check-my-ip.component';

const routes: Routes = [
  { path: '', component: CheckMyIpComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckMyIpComponent]
})
export class CheckMyIpModule { }
