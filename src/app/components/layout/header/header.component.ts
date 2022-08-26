import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/constants/globalConstants';
import { ToggleMenuService } from 'src/app/services/toggle-menu/toggle-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public toggleMenu : ToggleMenuService) { }

  ngOnInit(): void {
  }

  

  get redirects() {
    return GlobalConstants.REDIRECT_URLS;
  }

}
