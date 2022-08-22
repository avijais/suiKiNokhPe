import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { GlobalConstants } from 'src/app/constants/globalConstants';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  httpHeadersOptions: any

  constructor(
    private http: HttpClient,
  ) {
    this.httpHeadersOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  get(endPoint) {
    return this.http.get<any>(`${GlobalConstants.API_URL}${endPoint}`).pipe(
      tap((success) => (success)),
      catchError((err) => {
        return of(err.error)
      })
    )
  }
}