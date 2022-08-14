import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/constants/globalConstants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  get redirects() {
    return GlobalConstants.REDIRECT_URLS;
  }

}