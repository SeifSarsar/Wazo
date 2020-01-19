import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Individual } from "../../../environments/individual";
import { Branch } from "../../../environments/branch";
import { Enterprise } from "../../../environments/Enterprise";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.css"]
})
export class SignupPageComponent implements OnInit {
  constructor() {}

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
      //create user
      /*const user: User = new User(
        this.form.get("email").value,
        this.form.get("username").value,
        this.form.get("password").value
      );
      this.stateService.startLoading();

      this.httpService.addUser(user).subscribe(
        data => {
          this.stateService.closeWindowContent();
          this.stateService.logIn(data.token, data.user);
          this.stateService.endLoading();
        },
        err => {
          this.stateService.endLoading();

          this.stateService.notify(err.error, "error");
        }
      );*/
    }
  }
}
