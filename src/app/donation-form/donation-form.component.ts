import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category, Coordinates } from 'src/environments/global';
import { Donation } from 'src/environments/donation';
import { StateService } from '../state.service';
import { User } from 'src/environments/user';
import { HttpClient } from '@angular/common/http';

/*@Pipe({name: 'enumToArray'})
export class EnumToArrayPipe implements PipeTransform {
  transform(value) : Object {
    return Object.keys(value).filter(e => !isNaN(+e)).map(o => { return {index: +o, name: value[o]}});
  }
}*/

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css'],
  
})
export class DonationFormComponent implements OnInit {
  form: FormGroup;
  name: FormControl;
  capacity: FormControl;
  category: FormControl;
  address: FormControl;
  date: FormControl;
  time: FormControl;
  cat: string[] = [
    "Food",
    "Entertainment",
    "Furniture",
    "Clothing" ,
    "Other"
  ];
  private userId: string;
  longitude: number;
  latitude: number;

  constructor(private stateService: StateService, private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        name: new FormControl("", {
          validators:[Validators.required]
        }),
        capacity: new FormControl("", {
          validators:[Validators.required, Validators.pattern('[0-9]*')]
        }),
        category: new FormControl("", {
          validators:[Validators.required]
        }),
        address: new FormControl("", {
          validators:[Validators.required]
        }),
        date: new FormControl("", {
          validators:[Validators.required]
        }),
        time: new FormControl("", {
          validators:[Validators.required]
        })
      },
      { updateOn: "submit" }
    )
  }
  getCoordinates(adress){
    this.http.get<any>('https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=b5PONh6oKhomE_hcCR5CfY3hCD_VnDxbkQ-e-fF2Hsw&searchtext=${adress}')
    .subscribe(res=>{
      this.latitude = res.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
      this.longitude = res.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
    });
  }

  addDonation() {
    if(this.form.valid) {
      const name = this.form.get('name').value;
      const capacity = this.form.get('capacity').value;
      const category = this.form.get('category').value;
      const address = this.form.get('address').value;
      const date = this.form.get('date').value;
      const time = this.form.get('time').value;
      this.getCoordinates(address);
      let receivers = new Array<User>();
      this.stateService.userObs.subscribe(
        user => {
          if (user) {
            this.userId = user.getId();
          }
        },
        err => {
          console.log(err);
        }
      );
      const donation = new Donation("ifbiwjv", name, this.userId, capacity, receivers, date, 
      category, "idsv9sdovbav", new Coordinates(this.latitude, this. longitude) );

      console.log(donation);
    }
  }
}
