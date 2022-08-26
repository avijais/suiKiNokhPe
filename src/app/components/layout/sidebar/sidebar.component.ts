import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggle-menu/toggle-menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  subMenu;

  constructor(public toggleMenu : ToggleMenuService) { }

  ngOnInit(): void {
  }

  toggleSubMenu(menuName){
    this.subMenu = (this.subMenu == menuName) ? "NA" : menuName
  }
}