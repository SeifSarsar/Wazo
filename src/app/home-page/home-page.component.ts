import { Component, OnInit } from '@angular/core';
import { Donation } from '../../environments/donation';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  donations: Donation[] = new Array<Donation>();
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
   /* let data = new Blob();
    let arrayOfBlob = new Array<Blob>();
    arrayOfBlob.push(data);
    let file: File = new File(arrayOfBlob,'../../assets/SpongeBob-SquarePants-x-Nike-Kyrie-5-Pink.jpeg');
    let reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };*/

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
}
