import { Component, OnInit } from '@angular/core';

type Views = 'HOME' | 'GEN' | 'PAY' | 'ABOUT';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:[
    './navbar.component.css'
  ]
})
export class NavbarComponent  {

  menuExpanded = false;
  selectedView: Views = 'HOME';

  constructor() { }

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
  }

  setView(v: Views) {
    this.selectedView = v;
  }

}
