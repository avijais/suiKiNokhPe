import { Component, OnInit } from '@angular/core';
import { ToggleMenuService } from 'src/app/services/toggle-menu/toggle-menu.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public toggleMenu : ToggleMenuService) { }

  ngOnInit(): void {
  }

}
