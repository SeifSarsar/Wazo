import { Component, OnInit } from '@angular/core';
import { Donation } from '../../environments/donation';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatabaseService } from '../database.service';
import { User } from 'src/environments/user';

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  donations: Donation[] = new Array<Donation>();
  user: User;
  constructor(private firestore: AngularFirestore, private databaseService: DatabaseService) { }

  ngOnInit() {

    this.firestore.collection('Donation').get().subscribe(
      res => {
        if(!res) throw "Could not find documents";
        res.forEach((doc)=>{
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
          this.donations.push(newDonation);
        })
      }
    )
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
