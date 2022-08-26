import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/constants/globalConstants';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiConst } from 'src/app/constants/apiConst';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<any>

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')))
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  doLogin(formData) {
    console.log('dologin : ', formData);
    let url = `${GlobalConstants.API_URL}${ApiConst.END_POINT.LOGIN}`;
    return this.http.post<any>(url, formData)
      .pipe(
          map(
            user => {
              if (user && (user[GlobalConstants.STATUS_CODE] == 200) && user[GlobalConstants.DATA][GlobalConstants.TOKEN]) {
                let userData = user[GlobalConstants.DATA];
                console.log("userData authservice se : ", userData);
                if ([1,2].indexOf(userData.user_type) > -1) {
                  console.log('if 1 and 2');
                  localStorage.setItem('currentUser', JSON.stringify(userData));
                  this.currentUserSubject.next(userData);
                }
              }
              return user;
            }
          )
      )
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate([GlobalConstants.REDIRECT_URLS.LOGIN])
  }
}