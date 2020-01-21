import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }

  private latitude: number;
  private longitude: number;
  signup(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  addUser(
    userId: string,
    email: string,
    password: string,
    username: string,
    userType: string
  ) {
    return this.firestore
      .collection("User")
      .doc(userId)
      .set({
        email: email,
        password: password,
        generosity: 0,
        username: username,
        type: userType
      });
  }

  login(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getDonations(category: string, type: string, radius: number) {
    let lowerLatitude: number;
    let lowerLongitude: number;
    let greaterLatitude: number;
    let greaterLongitude: number;

    let donationsRef = this.firestore.collection("Donation").ref;

    lowerLatitude = this.latitude - 0.009009009 * radius;
    lowerLongitude = this.longitude - 0.009009009 * radius;

    greaterLatitude = this.latitude + 0.009009009 * radius;
    greaterLongitude = this.longitude + 0.009009009 * radius;
    let lesserGeopoint = new firebase.firestore.GeoPoint(
      lowerLatitude,
      lowerLongitude
    );
    let greaterGeopoint = new firebase.firestore.GeoPoint(
      greaterLatitude,
      greaterLongitude
    );
    if (category != "All") donationsRef.where("category", "==", category);

    if (type != "Both") donationsRef.where("userType", "==", type);

    donationsRef
      .where("location", ">=", lesserGeopoint)
      .where("location", "<=", greaterGeopoint);

    return donationsRef.get();
  }

  getDonation(donationId: string) {
    return this.firestore
      .collection("Donation")
      .doc(donationId)
      .get();
  }
  getUser(userId: string) {
    return this.firestore
      .collection("User")
      .doc(userId)
      .get();
  }
}
