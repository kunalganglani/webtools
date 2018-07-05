import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlEncodingComponent } from './url-encoding/url-encoding.component';
import { UrlDecodingComponent } from './url-decoding/url-decoding.component';
import { UrlToQrCodeComponent } from './url-to-qr-code/url-to-qr-code.component';
import { QrCodeToUrlComponent } from './qr-code-to-url/qr-code-to-url.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UrlEncodingComponent, UrlDecodingComponent, UrlToQrCodeComponent, QrCodeToUrlComponent]
})
export class UrlWebToolModule { }
