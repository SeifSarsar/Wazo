import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

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

  getUser(userId: string) {
    return this.firestore
      .collection("User")
      .doc(userId)
      .get();
  }


}
