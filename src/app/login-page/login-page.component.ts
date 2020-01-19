import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  constructor() {}

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
  login() {
    if (this.form.valid) {
      const email = this.form.get("email").value;
      const password = this.form.get("password").value;
      console.log(email);
      console.log(password);
    }
  }
}
