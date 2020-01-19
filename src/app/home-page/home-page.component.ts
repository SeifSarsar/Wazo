import { Component, OnInit } from "@angular/core";

import { StateService } from "../state.service";
import { DatabaseService } from '../database.service';
import { User } from 'src/environments/user';
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  donations: any[] = [];
  user: User;
  constructor(private stateService: StateService, private databaseService: DatabaseService) {}

  ngOnInit() {
    this.stateService.searchDonationsObs.subscribe(donations => {
      this.donations = donations;
      console.log(donations);
    });
  }

  getUsername(userId: string): void{
    this.databaseService.getUser(userId).subscribe(
      res => {
        if (!res || res == undefined) throw "Could not find a user";
        let newUser: any = res.data();
        this.user = new User(
          newUser.id,
          newUser.email,
          newUser.username,
          newUser.generosity
        );
        console.log(this.user.getUsername());
      },
      err => {
        throw err;
      }
    );
  }
}
