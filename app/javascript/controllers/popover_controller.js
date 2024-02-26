import { Controller, Application } from "@hotwired/stimulus"
import { Popover } from "tailwindcss-stimulus-components";


const application = Application.start();
// Connects to data-controller="popover"
export default class extends Controller {
  static targets = ["content"];
  timeout = null;
  connect() {
    application.register('popover', Popover)
  }

  // show(event) {
  //   // Show the popover content
  //   clearTimeout(this.timeout);
  //   this.contentTarget.classList.remove("hidden");
  // }

  // hide(event) {
  //   this.timeout = setTimeout(() => {
  //     this.contentTarget.classList.add("hidden");
  //   }, 300);
  // }
  
  // keepVisible(event) {
  //   console.log("keepVisible method called");
  //   clearTimeout(this.timeout);
  // }
}
