import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../environments/user";
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

  toggleSideBar() {
    if (this.isSidebarActive.value) {
      this.isSidebarActive.next(false);
    } else {
      this.isSidebarActive.next(true);
    }
  }
}
