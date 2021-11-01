import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAccessToken(): any {
    return localStorage.getItem('x-access-token');
  }


}
