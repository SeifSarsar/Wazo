import { Component, OnInit } from "@angular/core";
import { StateService } from "./state.service";
import { DatabaseService } from "./database.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(
    private stateService: StateService,
    private databaseService: DatabaseService,
    private router: Router
  ) {}
  isSidebarActive: boolean;

  typeFilter: string = "Both";

  form: FormGroup;
  setTypeFilter(type: string): void {
    this.typeFilter = type;
  }
  ngOnInit() {
    this.stateService.isSidebarActiveObs.subscribe(
      isSidebarActive => {
        this.isSidebarActive = isSidebarActive;
      },
      err => console.log(err)
    );
    this.form = this.form = new FormGroup(
      {
        radius: new FormControl(10, {
          validators: [Validators.min(1), Validators.max(100)]
        })
      },
      { updateOn: "submit" }
    );
  }

  search() {
    let radius = this.form.get("radius").value;

    let select: any = document.querySelector(".category-select");
    let category: string = select.options[select.selectedIndex].value;

    let donations: any[] = [];
    this.databaseService
      .getDonations(category, this.typeFilter, radius)
      .then(res => {
        res.forEach(donationDoc => {
          let donation = donationDoc.data();

          donations.push({ ...donation, id: donationDoc.id });
        });
        this.stateService.getDonations(donations);
        this.router.navigate([""]);
      });
  }
}
