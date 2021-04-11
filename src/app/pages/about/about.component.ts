import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  public parentCounter = 0;
  public childCounter = 0;
  constructor() {}

  ngOnInit() {}

  incrementChildCounter() {
    this.childCounter++;
  }

  incrementParentCounter() {
    this.parentCounter++;
  }
}
