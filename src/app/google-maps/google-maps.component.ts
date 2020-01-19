import { Component, OnInit } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { AngularFirestore } from '@angular/fire/firestore';
import { Donation } from "../../environments/donation";


@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent implements OnInit {
  constructor(private http:HttpClient,private firestore: AngularFirestore) {}
  coordinates: any;
  longitude:number;
  latitude:number;s
  getCoordinates(adress){
    this.http.get<any>(`https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=b5PONh6oKhomE_hcCR5CfY3hCD_VnDxbkQ-e-fF2Hsw&searchtext=${adress}`)
    .subscribe(res=>{
      this.latitude = res.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
      this.longitude = res.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
    });
  }
  selectedMarker;
  iconUrl = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png";
  marker = {
      latitude: this.coordinates.latidute,
      longitude: this.coordinates.longitude,
      alpha: 1,
      icon: { url: this.iconUrl }
  }
  selectMarker(event) {
    this.selectedMarker = {
      latitude: event.latitude,
      longitude: event.longitude
    };
  }
  ngOnInit() 
  {
    this.firestore.collection('Donation').get().subscribe
    (
      res => 
      {
        if(!res) throw "Could not find documents";
        res.forEach((doc)=>
        {
          let donation: any = doc.data();
          this.coordinates.push(donation.coordinates)
        });
      }
    )
  }
}
