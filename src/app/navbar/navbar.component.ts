import { Component, OnInit } from "@angular/core";
import { StateService } from "../state.service";
import { User } from "../../environments/user";
import { Router } from "@angular/router";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  constructor(private stateService: StateService, private router: Router) {}
  private user: any;
  ngOnInit() {
    this.stateService.userObs.subscribe(
      user => {
        if (user) {
          console.log(this.user);
          this.user = user;
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

  openUser() {
    this.router.navigate([`profile/${this.user.id}`]);
  }
}
