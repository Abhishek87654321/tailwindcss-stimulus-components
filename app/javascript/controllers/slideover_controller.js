import { Application, Controller } from "@hotwired/stimulus"
import { Slideover } from "tailwindcss-stimulus-components";

const application = Application.start();
// Connects to data-controller="slideover"
export default class extends Controller {
  connect() {
    application.register("slideover", Slideover)
  }
}
