import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-donation-description",
  templateUrl: "./donation-description.component.html",
  styleUrls: ["./donation-description.component.css"]
})
export class DonationDescriptionComponent implements OnInit {
  constructor(private router: Router) {}

  @Input("donation") donation: any;
  ngOnInit() {}

  openDonation() {
    this.router.navigate([`donation/${this.donation.id}`]);
  }
}
