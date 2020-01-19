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
  donations: Donation[] = new Array<Donation>();
  private user: User;
  ngOnInit() {
    this.stateService.userObs.subscribe(
      user => {
        if (user) {
          this.user = user;
          console.log(user);
        }
      },
      err => {
        console.log(err);
      }
    );
    this.firestore
      .collection("Donation")
      .get()
      .subscribe(res => {
        if (!res) throw "Could not find documents";
        res.forEach(doc => {
          let donation: any = doc.data();
          let newDonation = new Donation(
            donation.id,
            donation.title,
            donation.userId,
            donation.capacity,
            donation.participants,
            donation.date,
            donation.category,
            donation.description,
            donation.coordinates
          );
          console.log(newDonation);
          if (newDonation.getId() == this.user.getId()) {
            this.donations.push(newDonation);
          }
        });
      });
  }
}
