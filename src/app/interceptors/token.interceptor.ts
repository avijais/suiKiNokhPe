import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { GlobalConstants } from '../constants/globalConstants';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authSer: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = this.authSer.currentUserValue;
    console.log('token interceptor currentUser : ', currentUser);
    if (currentUser && currentUser[GlobalConstants.TOKEN]) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${currentUser[GlobalConstants.TOKEN]}`
        }
      })
    }
    console.log('request : ', request);
    return next.handle(request);
  }
}
