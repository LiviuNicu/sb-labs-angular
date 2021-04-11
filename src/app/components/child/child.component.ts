import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"],
})
export class ChildComponent implements OnInit {
  @Input() counterValue;
  @Output() changeParentCounter = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  incrementParent() {
    this.changeParentCounter.emit();
  }
}
