import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavascriptMinifyComponent } from './javascript-minify/javascript-minify.component';
import { IfElseTernaryComponent } from './if-else-ternary/if-else-ternary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JavascriptMinifyComponent, IfElseTernaryComponent]
})
export class JavascriptWebToolModule { }
