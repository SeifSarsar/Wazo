import { Component, OnInit } from "@angular/core";

import { StateService } from "../state.service";
@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  donations: any[] = [];
  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.searchDonationsObs.subscribe(donations => {
      this.donations = donations;
    });
  }
}
