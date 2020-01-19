import { Component, OnInit } from '@angular/core';
import { StateService } from "../../service/state.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private stateService: StateService) {}
  navbarOpen = false;
  toggleSideBar(){
    this.stateService.toggleSideBar();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
