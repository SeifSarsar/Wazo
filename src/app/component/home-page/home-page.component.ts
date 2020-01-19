import { Component, OnInit } from '@angular/core';
import { Donation } from '../../../environments/donation';
import { Individual } from 'src/environments/individual';
import { Category, Coordinates } from 'src/environments/global';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  donations: Donation[] = new Array<Donation>();
  constructor() { }

  ngOnInit() {
    let date: Date = new Date("2019-01-16")
    let user: Individual = new Individual("15271", "gedambreville@gmail.com", "Etzerthe3rd", 5);
    let donation: Donation = new Donation("1234", "Beats Pro", user, 3, [], date, Category.Furniture, "beatsProimage.png",new Coordinates(45, 36));
    this.donations.push(donation);
  }

}
