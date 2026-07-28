import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from "@angular/core";
import SitAlert from "@sit-canvas/canvas-web-component/components/Alert/sit-alert.js";

@Component({
  selector: "alert-component",
  templateUrl: "./alert.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Alert {
  @ViewChild("alert")
  alert?: ElementRef<SitAlert>;

  showAlert() {
    if (this.alert) {
      this.alert.nativeElement.show = true;
    }
  }

  closeAlert() {
    this.alert?.nativeElement.close();
  }
}
