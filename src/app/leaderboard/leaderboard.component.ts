import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})


export class LeaderboardComponent implements OnInit {
  feedbackItems: any[] = [];
  constructor(private firestore:AngularFirestore, private router: Router) { 
  }
  foo(event:any): void {
    let x = this.feedbackItems.find(i=> i.id === event.data.id).id;
    this.router.navigate([`profile/${x}`]);
  }

  ngOnInit() { 
    this.firestore.collection('User').get().subscribe(
      res => {
        if(!res) throw "Could not find documents";
        res.forEach((doc)=>{
          this.feedbackItems.push({...doc.data(), id : doc.id});
        })
        this.sortData();
        
        console.log(this.feedbackItems);
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

