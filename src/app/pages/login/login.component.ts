import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public user: any = {
    email: "test",
    password: "",
  };
  public error: any = false;
  constructor() {}

  ngOnInit() {}

  login() {
    console.log(this.user);
    this.error = false;
    if (this.validateEmail(this.user.email)) {
    } else {
      this.error = "Email is not valid";
    }
  }

  isNotValid(): boolean {
    return !this.user.email || !this.user.password;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
