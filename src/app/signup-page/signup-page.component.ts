import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { User } from "../../environments/user";
import { Router } from "@angular/router";
import { DatabaseService } from "../database.service";
import { StateService } from "../state.service";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.css"]
})
export class SignupPageComponent implements OnInit {
  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private stateService: StateService
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
                .then(res => {
                  let userId = res.user.uid;
                  this.databaseService.getUser(userId).subscribe(
                    res => {
                      if (!res || res == undefined)
                        throw "Could not find a user";
                      let user: any = res.data();

                      let newUser = new User(
                        res.id,
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
