import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToggleMenuService {
  
  closeDashboardMenu: boolean = false;
  closeMenu: boolean = false;
  headerWidth: boolean = false;
  mainlayoutWidth: boolean = false;
  
  constructor() { }
  
  closeSideBar(){
    console.log('ds');
    this.closeDashboardMenu = !this.closeDashboardMenu;
    this.closeMenu = !this.closeMenu;
    this.headerWidth = !this.headerWidth;
    this.mainlayoutWidth = !this.mainlayoutWidth;
  }
}
