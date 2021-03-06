import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlEncodingComponent } from './url-encoding/url-encoding.component';
import { UrlDecodingComponent } from './url-decoding/url-decoding.component';
import { UrlToQrCodeComponent } from './url-to-qr-code/url-to-qr-code.component';
import { QrCodeToUrlComponent } from './qr-code-to-url/qr-code-to-url.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { CoreModule } from '../shared/core/core.module';

const routes: Routes = [
  { path: '', component: UrlToQrCodeComponent},
  { path: 'url-encoding', component: UrlEncodingComponent},
  { path: 'url-decoding', component: UrlDecodingComponent},
  { path: 'url-to-qr-code', component: UrlToQrCodeComponent},
  { path: 'qr-code-to-url', component: QrCodeToUrlComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UrlEncodingComponent, UrlDecodingComponent, UrlToQrCodeComponent, QrCodeToUrlComponent]
})
export class UrlWebToolModule { }
