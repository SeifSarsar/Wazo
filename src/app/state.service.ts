import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../environments/user";
import { Donation } from "../environments/donation";
@Injectable({
  providedIn: "root"
})
export class StateService {
  constructor() {
    //this.isLoggedIn.next(true); //
    this.isSidebarActive.next(true);
  }

  private isSidebarActive = new BehaviorSubject<boolean>(null);
  isSidebarActiveObs: Observable<boolean> = this.isSidebarActive.asObservable();

  private user = new BehaviorSubject<User>(null);
  userObs: Observable<User> = this.user.asObservable();

  private searchDonations = new BehaviorSubject<any[]>(null);
  searchDonationsObs: Observable<any[]> = this.searchDonations.asObservable();

  getDonations(donations: any[]) {
    console.log(donations);
    this.searchDonations.next(donations);
  }

  login(user: User) {
    this.user.next(user);
  }

  toggleSideBar() {
    if (this.isSidebarActive.value) {
      this.isSidebarActive.next(false);
    } else {
      this.isSidebarActive.next(true);
    }
  }
}
