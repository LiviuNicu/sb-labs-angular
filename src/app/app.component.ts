import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public title: string = "my-app lallaalla";
  public isDisabled: boolean = false;
  public profileParam: string = "2";

  constructor(private router: Router) {}

  btnClick() {
    console.log("AM APASAT PE BUTON");
  }

  inputClick(event: any) {
    console.log(event);
    console.dir(event.value);
    this.profileParam = event.value;
  }

  goToAbout() {
    this.router.navigate(["/about"]);
  }
}
