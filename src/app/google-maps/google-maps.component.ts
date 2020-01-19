import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.css"]
})
export class GoogleMapsComponent implements OnInit {
  constructor() {}
  latitude = 45.504384;
  longitude = -73.6150716;
  selectedMarker;
  iconUrl = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png";
  markers = [
    {
      latitude: 45.51251870000001,
      longitude: -73.6133858,
      alpha: 1,
      icon: { url: this.iconUrl }
    },
    {
      latitude: 45.75606,
      longitude: -73.5649177,
      alpha: 1,
      icon: { url: this.iconUrl }
    },
    {
      latitude: 45.510897,
      longitude: -73.5649177,
      alpha: 1,
      icon: { url: this.iconUrl }
    }
  ];

  selectMarker(event) {
    this.selectedMarker = {
      latitude: event.latitude,
      longitude: event.longitude
    };
  }
  ngOnInit() {}
}
