import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent implements OnInit {
  constructor(private http: HttpClient, private firestore: AngularFirestore) {}
  @Input("latitude") latitude: number[];
  @Input("longitude") longitude: number[];

  private iconUrl: string =
    "http://maps.google.com/mapfiles/ms/icons/pink-dot.png";

  private marker: any;

  ngOnInit() {
    this.marker = {
      latitude: this.latitude,
      longitude: this.longitude,
      alpha: 10,
      icon: { url: this.iconUrl }
    };
  }
}
