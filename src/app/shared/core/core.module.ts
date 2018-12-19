import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { MaterialModule } from '../material.module';
import { SpinnerService } from '../spinner/spinner.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SpinnerComponent,
    UnderConstructionComponent
  ],
  providers: [ SpinnerService, ConfirmDialogService],
  declarations: [UnderConstructionComponent, SpinnerComponent, ConfirmDialogComponent],
  entryComponents: [ ConfirmDialogComponent ]
})
export class CoreModule { }
