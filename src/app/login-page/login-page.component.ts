import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";
import { StateService } from "../state.service";
import { User } from "../../environments/user";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private stateService: StateService,
    private router: Router
  ) {}

  userType: string = "Individual";

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup(
      {
        email: new FormControl("", {
          validators: [Validators.required, Validators.email]
        }),
        password: new FormControl("", {
          validators: [Validators.required]
        })
      },
      { updateOn: "submit" }
    );
  }

  setUserType(type: string): void {
    this.userType = type;
  }
  login() {
    if (this.form.valid) {
      const email = this.form.get("email").value;
      const password = this.form.get("password").value;
      this.databaseService
        .login(email, password)
        .then(res => {
          let userId = res.user.uid;
          this.databaseService.getUser(userId).subscribe(
            res => {
              if (!res) throw "Could not find a user";
              let user: any = res.data();
              let newUser = new User(
                user.id,
                user.email,
                user.username,
                user.generosity
              );
              console.log(newUser);
              this.stateService.login(newUser);
              this.router.navigate(["/"]);
            },
            err => {
              throw err;
            }
          );
        })
        .catch(err => console.log(err));
    }
  }
}
