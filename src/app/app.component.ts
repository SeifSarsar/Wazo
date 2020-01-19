import { Component, OnInit } from "@angular/core";
import { StateService } from "./service/state.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private stateService: StateService) {}
  isSidebarActive: boolean;

  ngOnInit() {
    this.stateService.isSidebarActiveObs.subscribe(
      isSidebarActive => {
        this.isSidebarActive = isSidebarActive;
      },
      err => console.log(err)
    );
  }
}
