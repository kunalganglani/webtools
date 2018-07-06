import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { MaterialModule } from './shared/material.module';

import { UserService } from './user.service';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterModule'},
  {path: 'base64-encoding-decoding', loadChildren: './base64-web-tool/base64-web-tool.module#Base64WebToolModule'},
  {path: 'check-my-ip', loadChildren: './check-my-ip/check-my-ip.module#CheckMyIpModule'},
  {path: 'color-web-tool', loadChildren: './color-web-tool/color-web-tool.module#ColorWebToolModule'},
  {path: 'css-web-tool', loadChildren: './css-web-tool/css-web-tool.module#CssWebToolModule'},
  {path: 'javascript-web-tool', loadChildren: './javascript-web-tool/javascript-web-tool.module#JavascriptWebToolModule'},
  {path: 'password-web-tool', loadChildren: './password-web-tool/password-web-tool.module#PasswordWebToolModule'},
  {path: 'string-manipulation',
  loadChildren: './string-manipulation-web-tool/string-manipulation-web-tool.module#StringManipulationWebToolModule'},
  {path: 'url-web-tool', loadChildren: './url-web-tool/url-web-tool.module#UrlWebToolModule'},

  {path: 'members', loadChildren: './members/members.module#MembersModule'},
  {path: '**', redirectTo: 'dashboard'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
