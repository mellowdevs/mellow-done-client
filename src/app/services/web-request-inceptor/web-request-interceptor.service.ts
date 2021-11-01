import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class WebRequestInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addAuthHeader(req);
    return next.handle(req).pipe();
  }

  private addAuthHeader(req: HttpRequest<any>): any {
    const token = this.authService.getAccessToken();
    if (token) {
      return req.clone({
  
        setHeaders: {
          'x-access-token': token
        }
      });
    }
    return req;
  }
}

