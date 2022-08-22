import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/constants/globalConstants';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public authSer: AuthService
  ) { }

  ngOnInit(): void {}

  get redirects() {
    return GlobalConstants.REDIRECT_URLS;
  }

}