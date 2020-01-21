import { Component, OnInit } from "@angular/core";
import { StateService } from "../state.service";
import { DatabaseService } from "../database.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Donation } from "src/environments/donation";
import { User } from "src/environments/user";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.css"]
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private stateService: StateService,
    private databaseService: DatabaseService,
    private firestore: AngularFirestore
  ) {}
  private donations: any[] = [];
  private user: any;
  ngOnInit() {
    this.stateService.userObs.subscribe(
      user => {
        if (user) {
          this.user = user;

          this.firestore
            .collection("Donation")
            .ref.where("userId", "==", this.user.id)
            .get()
            .then(res => {
              res.forEach(donationDoc => {
                let donation = donationDoc.data();

                this.donations.push({ ...donation, id: donationDoc.id });
              });
              this.stateService.getDonations(this.donations);
            });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
