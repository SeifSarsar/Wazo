import { Component, OnInit } from "@angular/core";
import { StateService } from "../state.service";
import { DatabaseService } from "../database.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-donation-page",
  templateUrl: "./donation-page.component.html",
  styleUrls: ["./donation-page.component.css"]
})
export class DonationPageComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private activatedRouter: ActivatedRoute
  ) {}

  donation: any = null;
  donationAuthor: any = null;
  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>
      this.databaseService.getDonation(params.id).subscribe(donationdoc => {
        this.donation = donationdoc.data();
        this.databaseService
          .getUser(this.donation.userId)
          .subscribe(userdoc => {
            this.donationAuthor = userdoc.data();
          });
      })
    );
  }
}
