import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CheckMyIpComponent } from './check-my-ip/check-my-ip.component';
import { CoreModule } from '../shared/core/core.module';

const routes: Routes = [
  { path: '', component: CheckMyIpComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckMyIpComponent]
})
export class CheckMyIpModule { }
