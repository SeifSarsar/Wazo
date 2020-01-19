import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})


export class LeaderboardComponent implements OnInit {
  feedbackItems: any[] = [];

  constructor(private firestore:AngularFirestore) { 
  }

  ngOnInit() {
    this.firestore.collection('User').get().subscribe(
      res => {
        if(!res) throw "Could not find documents";
        res.forEach((doc)=>{
          this.feedbackItems.push(doc.data());
        })
        this.sortData();
        

        this.columnDefs = [
          {headerName: 'Enterprise', field: 'username', sortable: true, filter: true },
          {headerName: 'Price', field: 'generosity', sortable: true},
          {headerName: 'Mail', field: 'email' },
        ];

        this.rowData = this.feedbackItems;
      }
    )
  }

  sortData():void{
    this.feedbackItems.sort((a, b) => (a.generosity < b.generosity) ? 1 : -1);
  }
  title = 'app';
  columnDefs = [];
  rowData = [];
}

