import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/constants/globalConstants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  doLogin(formData) {
    console.log('dologin : ', formData);
    let url = `${GlobalConstants.API_URL}${GlobalConstants.API.LOGIN}`;
    return this.http.post<any>(url, formData)
      .pipe(
          map(
            user => {
              return user;
            }
          )
      )
  }

}