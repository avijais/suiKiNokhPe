import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/app/constants/globalConstants';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(
    private apiSer: ApiService
  ) {}

  getRestoDropDown() {
    console.log('get restarurant dropdown');
    this.apiSer.get(GlobalConstants.API.REST_DROP_DOWN).subscribe(
      response => {
        console.log('get resto : ', response);
      }
    )
  }

  getUserTypeDropDown() {
    console.log('get restaurant drpdown');
    this.apiSer.get(GlobalConstants.API.USER_TYPE).subscribe(
      response => {
        console.log('user type get : ', response);
      }
    )
  }

}