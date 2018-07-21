import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _deleteUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient,
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  deleteUser(user) {
    return this.http.delete<any>(this._deleteUrl + '/' + user);
  }
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this._router.navigate(['/home']);
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
  }

  loggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
  }
}
