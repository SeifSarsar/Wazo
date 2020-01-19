import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Individual } from "../../environments/individual";
import { Branch } from "../../environments/branch";
import { Enterprise } from "../../environments/Enterprise";

import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.css"]
})
export class SignupPageComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  form: FormGroup;

  userType: string = "Individual";
  ngOnInit() {
    this.form = new FormGroup(
      {
        email: new FormControl("", {
          validators: [Validators.required, Validators.email]
        }),
        username: new FormControl("", {
          validators: [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(30)
          ]
        }),
        password: new FormControl("", {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30)
          ]
        }),
        confirmPassword: new FormControl("")
      },
      {
        validators: this.checkMatch("password", "confirmPassword"),
        updateOn: "submit"
      }
    );
  }

  checkMatch(password: string, confirmPassword: string) {
    return function(form: FormGroup) {
      const passwordValue = form.get(password).value;
      const confirmPasswordValue = form.get(confirmPassword).value;

      if (passwordValue != confirmPasswordValue) {
        return { notMatch: "Passwords do not match" };
      }
      return null;
    };
  }

  setUserType(type: string): void {
    this.userType = type;
  }
  signup() {
    if (this.form.valid) {
      let email = this.form.get("email").value;
      let password = this.form.get("password").value;
      let username = this.form.get("username").value;

      this.databaseService
        .signup(email, password)
        .then(res => {
          this.databaseService
            .addUser(res.user.uid, email, password, username, this.userType)
            .then(() => {
              this.databaseService
                .login(email, password)
                .then(() => {
                  this.router.navigate(["/"]);
                })
                .catch(err => {
                  throw err;
                });
            })
            .catch(err => {
              throw err;
            });
        })
        .catch(err => console.log(err));
    }
  }
}
