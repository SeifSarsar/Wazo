import { Component, OnInit } from '@angular/core';
import { Profile } from './profile';
import { AngularFirestore } from "@angular/fire/firestore";
import { query } from '@angular/animations';

export const profiles: Profile[] = [
  { points: 11, name: 'Dr Nice' },
  { points: 12, name: 'Narco' },
  { points: 13, name: 'Bombasto' },
  { points: 14, name: 'Celeritas' },
  { points: 15, name: 'Magneta' },
  { points: 16, name: 'RubberMan' },
  { points: 17, name: 'Dynama' },
  { points: 18, name: 'Dr IQ' },
  { points: 19, name: 'Magma' },
  { points: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})


export class LeaderboardComponent implements OnInit {
  feedbackitems: any[] = [];

  constructor(private firestore:AngularFirestore) { 
  }

  liste = profiles;

  ngOnInit() {
    this.firestore.collection('Enterprise').get().subscribe(
      res => {
        if(!res) throw "Could not find documents";
        res.forEach((doc)=>{
          console.log(doc.data());
          this.feedbackitems.push(doc.data());
        })
      }
    )
    this.liste[2] = {points:0, name:"EtzerLaPute"};
  }

}
