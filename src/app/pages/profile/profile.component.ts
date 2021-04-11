import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  public paramText: string = "";
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.paramText = param.id;
    });
    this.activatedRoute.queryParams.subscribe((query) => {
      console.log(query);
    });
  }
}
