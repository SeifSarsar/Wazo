import { Component, OnInit } from "@angular/core";
import { StateService } from "../state.service";
import { User } from "../../environments/user";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  constructor(private stateService: StateService) {}
  private navbarOpen: boolean = false;
  private username:string;
  private userID:string;
  ngOnInit() {
    console.log(this.userID);
    this.stateService.userObs.subscribe(
      user => {
        if (user) {
          this.username = user.getUsername();
          this.userID = user.getId();
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  toggleSideBar() {
    this.stateService.toggleSideBar();
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
