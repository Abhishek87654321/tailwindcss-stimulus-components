import { Application, Controller } from "@hotwired/stimulus"
import { Toggle } from "tailwindcss-stimulus-components";
const application = Application.start();

// Connects to data-controller="toggle"
export default class extends Controller {
  connect() {
    application.register("toggle", Toggle)
  }
}
